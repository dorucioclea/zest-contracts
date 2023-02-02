import { types } from 'https://deno.land/x/clarinet@v1.0.2/index.ts';
class CollVault {
    static getLoanColl(chain, collVaultContract, loanId, caller) {
        return chain.callReadOnlyFn(collVaultContract, "get-loan-coll", [
            types.uint(loanId), 
        ], caller).result;
    }
}
export { CollVault };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZmVybmFuZG9mb3kvRG9jdW1lbnRzL3plc3QtY29udHJhY3RzL29uY2hhaW4vdGVzdHMvaW50ZXJmYWNlcy9jb2xsLXZhdWx0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR4LCBDaGFpbiwgQWNjb3VudCwgdHlwZXMgfSBmcm9tICdodHRwczovL2Rlbm8ubGFuZC94L2NsYXJpbmV0QHYxLjAuMi9pbmRleC50cyc7XG5cbmNsYXNzIENvbGxWYXVsdCB7XG4gIHN0YXRpYyBnZXRMb2FuQ29sbChjaGFpbjogQ2hhaW4sIGNvbGxWYXVsdENvbnRyYWN0OiBzdHJpbmcsIGxvYW5JZDogbnVtYmVyLCBjYWxsZXI6IHN0cmluZykge1xuICAgIHJldHVybiBjaGFpbi5jYWxsUmVhZE9ubHlGbihcbiAgICAgIGNvbGxWYXVsdENvbnRyYWN0LFxuICAgICAgXCJnZXQtbG9hbi1jb2xsXCIsXG4gICAgICBbXG4gICAgICAgIHR5cGVzLnVpbnQobG9hbklkKSxcbiAgICAgIF0sIGNhbGxlcikucmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCB7IENvbGxWYXVsdCB9OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUE2QixLQUFLLFFBQVEsOENBQThDLENBQUM7QUFFekYsTUFBTSxTQUFTO0lBQ2IsT0FBTyxXQUFXLENBQUMsS0FBWSxFQUFFLGlCQUF5QixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUU7UUFDMUYsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUN6QixpQkFBaUIsRUFDakIsZUFBZSxFQUNmO1lBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkIsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDckI7Q0FDRjtBQUVELFNBQVMsU0FBUyxHQUFHIn0=