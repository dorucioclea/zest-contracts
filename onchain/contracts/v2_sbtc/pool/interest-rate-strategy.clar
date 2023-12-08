
;; 0.8 Ur
(define-constant optimal-utilization-rate u8000)
(define-constant excess-utilization-rate (- u10000 optimal-utilization-rate))


;; when Ur = 0
(define-data-var base-variable-borrow-rate uint u0)

;; when Ur < optimal-utilization-rate
(define-data-var variable-rate-slope-1 uint u0)
;; when Ur > optimal-utilization-rate
(define-data-var variable-rate-slope-2 uint u0)

;; when Ur < optimal-utilization-rate
(define-data-var stable-rate-slope-1 uint u0)
;; when Ur > optimal-utilization-rate
(define-data-var stable-rate-slope-2 uint u0)

;; returns current liquidity rate
(define-read-only (calculate-interest-rates
    (available-liquidity uint)
    (total-borrows-stable uint)
    (total-borrows-variable uint)
    (average-stable-borrow-rate uint)
  )
  (let (
    (total-borrows (+ total-borrows-stable total-borrows-variable))
    (utilization-rate
      (if (and (is-eq u0 total-borrows-stable) (is-eq u0 total-borrows-variable))
        u0
        (/
          (* u10000 total-borrows)
          (+ total-borrows available-liquidity)
          u10000
        )
      )
    )
    ;; TODO: should get this from an oracle, but might not exist
    (current-stable-borrow-rate u500)
  )
    (if (> utilization-rate optimal-utilization-rate)
      (let (
          (excess-utilization-rate-ratio
            (*
              (/
                (* u10000 (- utilization-rate optimal-utilization-rate))
                excess-utilization-rate)
              u10000))
          (new-stable-borrow-rate
            (+
              (+ current-stable-borrow-rate (var-get stable-rate-slope-1))
              (/
                (*
                  (* (var-get stable-rate-slope-2) u10000)
                  excess-utilization-rate-ratio)
                u10000)))
          (new-variable-borrow-rate
            (+
              (+ (var-get base-variable-borrow-rate) (var-get variable-rate-slope-1))
              (/
                (*
                  (* u10000 (var-get variable-rate-slope-2))
                  excess-utilization-rate-ratio)
                u10000))))
        (ok
          (*
            (get-overall-borrow-rate-internal
              total-borrows-stable
              total-borrows-variable
              new-variable-borrow-rate
              average-stable-borrow-rate
            )
            utilization-rate
          )
        )
      )
      (let (
        (new-stable-borrow-rate
          (+
            current-stable-borrow-rate
            (/
              (*
                (var-get stable-rate-slope-1)
                (/
                  (* u10000 utilization-rate)
                  optimal-utilization-rate ))
              u10000)
          ))
        (new-variable-borrow-rate
          (+
            (var-get base-variable-borrow-rate)
            (/
              (*
                (var-get variable-rate-slope-1)
                (/ 
                  (* u1000 utilization-rate)
                  optimal-utilization-rate
                )
              )
              u10000
            )
          )
        )
      )
        (ok
          (*
            (get-overall-borrow-rate-internal
              total-borrows-stable
              total-borrows-variable
              new-variable-borrow-rate
              average-stable-borrow-rate
            )
            utilization-rate
          )
        )
      )
    )
  )
)

(define-private (get-overall-borrow-rate-internal
    (total-borrows-stable uint)
    (total-borrows-variable uint)
    (current-variable-borrow-rate uint)
    (current-average-stable-borrow-rate uint)
  )
  (let (
    (total-borrows (+ total-borrows-stable total-borrows-variable))
  )
    (if (is-eq total-borrows u0)
      u0
      (let (
        (weighted-variable-rate
          (* total-borrows-variable current-variable-borrow-rate))
        (weighted-stable-rate
          (* total-borrows-stable current-average-stable-borrow-rate))
        (overall-borrow-rate
           (/
            (/
              (* u10000 (+ weighted-variable-rate weighted-stable-rate))
              total-borrows)
            u10000)))
          overall-borrow-rate
      ))))

(define-read-only (get-utilization-rate
  (total-borrows-stable uint)
  (total-borrows-variable uint)
  (available-liquidity uint))
  (let (
    (total-borrows (+ total-borrows-stable total-borrows-variable))
  )
    (/
      (* u10000 total-borrows)
      (+ total-borrows available-liquidity)
      u10000
    )
  )
)


(define-constant one-8 u100000000)

(define-read-only (mul (x uint) (y uint))
  (/ (+ (* x y) (/ one-8 u2)) one-8)
)

(define-read-only (div (x uint) (y uint))
  (/ (+ (* x one-8) (/ y u2)) y)
)


(define-constant iter-buff-128 0x000000000000)
;; (define-constant iter-buff-128 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)

(define-read-only (is-odd (x uint))
  (not (is-even x))
)

(define-read-only (is-even (x uint))
  (is-eq (mod x u2) u0)
)

(define-constant e 271828182)

(define-read-only (test-this)
  (mul (* one-8 u1000) (taylor-x (mul u5000000 u300000000)))
)

(define-constant fact_2 u200000000)
(define-constant fact_3 (mul u300000000 u200000000))
(define-constant fact_4 (mul u400000000 (mul u300000000 u200000000)))
(define-constant fact_5 (mul u500000000 (mul u400000000 (mul u300000000 u200000000))))
(define-constant fact_6 (mul u600000000 (mul u500000000 (mul u400000000 (mul u300000000 u200000000)))))

(define-read-only (x_2 (x uint)) (mul x x))
(define-read-only (x_3 (x uint)) (mul x (mul x x)))
(define-read-only (x_4 (x uint)) (mul x (mul x (mul x x))))
(define-read-only (x_5 (x uint)) (mul x (mul x (mul x (mul x x)))))
(define-read-only (x_6 (x uint)) (mul x (mul x (mul x (mul x (mul x x))))))

(define-read-only (taylor-x (x uint))
  (+
    one-8
    x
    (div (x_2 x) fact_2)
    (div (x_3 x) fact_3)
    (div (x_4 x) fact_4)
    (div (x_5 x) fact_5)
    (div (x_6 x) fact_6)
  )
)

;; (define-read-only (pow8 (x uint) (n uint))
;;   (let (
;;     (z (if (is-odd n) x ONE_8))
;;   )
;;     (get z (fold pow8-internal iter-buff-128 { x: x, n: n, z: z}))
;;   )
;; )

;; (define-private (pow8-internal (i (buff 1)) (ret { x: uint, n: uint, z: uint }))
;;   (let (
;;     (x (get x ret))
;;     (z (get z ret))
;;     (n (/ (get n ret) u2))
;;   )
;;     (let ((x_2 (mul x x)))
;;       (if (> n u0)
;;         (if (is-odd (get n ret))
;;           { x: x_2, n: n, z: (mul z x) }
;;           { x: x_2, n: n, z: z }
;;         )
;;         { x: x, n: n, z: z }
;;       )
;;     )
;;   )
;; )