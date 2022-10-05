
;; (try! (contract-call? .loan-v1-0 add-borrower 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP))

(try! (contract-call? .executor-dao construct .zgp000-bootstrap))
(try! (contract-call? .globals add-admin tx-sender))
(try! (contract-call? .globals add-governor tx-sender))
(try! (contract-call? .Wrapped-Bitcoin initialize "xBTC" "xBTC" u8 (as-contract tx-sender)))
(try! (contract-call? .Wrapped-USD initialize "xUSD" "xUSD" u8 (as-contract tx-sender)))
(try! (contract-call? .Wrapped-Bitcoin add-principal-to-role u1 (as-contract tx-sender)))
(try! (contract-call? .Wrapped-USD add-principal-to-role u1 (as-contract tx-sender)))
(try! (contract-call? .Wrapped-Bitcoin set-token-uri u"https://wrapped.com/xbtc.json"))
(try! (contract-call? .Wrapped-USD set-token-uri u"https://wrapped.com/xusd.json"))
;; testnet
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000000000 'STC6G8DC2A0V58A6399M22C06BF4EK5JZSQW7BWP))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000000000 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP))
(try! (contract-call? .Wrapped-USD mint-tokens u10000000000000000 'STC6G8DC2A0V58A6399M22C06BF4EK5JZSQW7BWP))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000000000 'ST1G4X22QKFSE2XTZGWKB8X897PA8RP3M2WTTYHW6))
(try! (contract-call? .Wrapped-USD mint-tokens u10000000000000000 'ST1G4X22QKFSE2XTZGWKB8X897PA8RP3M2WTTYHW6))
;; simnet
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u100000000000000 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000000 'ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u10000000000000 .supplier-interface))

(try! (contract-call? .Wrapped-USD mint-tokens u10000000000 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM))
(try! (contract-call? .Wrapped-USD mint-tokens u10000000000 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5))
(try! (contract-call? .Wrapped-USD mint-tokens u100000000000000 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC))
(try! (contract-call? .Wrapped-USD mint-tokens u10000000000 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG))
(try! (contract-call? .Wrapped-USD mint-tokens u10000000000000 'ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND))
(try! (contract-call? .Wrapped-USD mint-tokens u200000000000000 'ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP))

(try! (contract-call? .Wrapped-USD mint-tokens u200000000000000 .swap-router))
(try! (contract-call? .Wrapped-Bitcoin mint-tokens u100000000000000 .swap-router))


;; (try! (contract-call? .pool-v1-0 add-admin 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM))
