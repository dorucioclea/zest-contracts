import { Tx, types } from 'https://deno.land/x/clarinet@v1.0.2/index.ts';
class LPToken {
    chain;
    deployer;
    constructor(chain, deployer){
        this.chain = chain;
        this.deployer = deployer;
    }
    withdrawFunds(lpToken, lender) {
        return this.chain.mineBlock([
            Tx.contractCall(`${lpToken}`, "withdraw-rewards", [], lender)
        ]);
    }
    withdrawableFundsOf(lpToken, caller) {
        return this.chain.callReadOnlyFn(`${this.deployer.address}.${lpToken}`, "withdrawable-funds-of", [
            types.principal(caller), 
        ], this.deployer.address);
    }
    recognizableLossesOf(lpToken, tokenId, caller) {
        return this.chain.callReadOnlyFn(`${this.deployer.address}.${lpToken}`, "recognizable-losses-of-read", [
            types.uint(tokenId),
            types.principal(caller), 
        ], this.deployer.address);
    }
    getBalance(lpToken, tokenId, owner) {
        return this.chain.callReadOnlyFn(`${this.deployer.address}.${lpToken}`, "get-balance", [
            types.uint(tokenId),
            types.principal(owner), 
        ], this.deployer.address);
    }
    getLossesPerShare(lpToken, tokenId) {
        return this.chain.callReadOnlyFn(`${this.deployer.address}.${lpToken}`, "get-losses-per-share", [
            types.uint(tokenId), 
        ], this.deployer.address);
    }
}
export { LPToken };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZmVybmFuZG9mb3kvRG9jdW1lbnRzL3plc3QtY29udHJhY3RzL29uY2hhaW4vdGVzdHMvaW50ZXJmYWNlcy9scC10b2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeCwgQ2hhaW4sIEFjY291bnQsIHR5cGVzIH0gZnJvbSAnaHR0cHM6Ly9kZW5vLmxhbmQveC9jbGFyaW5ldEB2MS4wLjIvaW5kZXgudHMnO1xuXG5jbGFzcyBMUFRva2VuIHtcbiAgICBjaGFpbjogQ2hhaW47XG4gICAgZGVwbG95ZXI6IEFjY291bnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjaGFpbjogQ2hhaW4sIGRlcGxveWVyOiBBY2NvdW50KSB7XG4gICAgICAgIHRoaXMuY2hhaW4gPSBjaGFpbjtcbiAgICAgICAgdGhpcy5kZXBsb3llciA9IGRlcGxveWVyO1xuICAgIH1cblxuICAgIHdpdGhkcmF3RnVuZHMobHBUb2tlbjogc3RyaW5nLCBsZW5kZXI6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhaW4ubWluZUJsb2NrKFtcbiAgICAgICAgVHguY29udHJhY3RDYWxsKFxuICAgICAgICAgIGAke2xwVG9rZW59YCxcbiAgICAgICAgICBcIndpdGhkcmF3LXJld2FyZHNcIixcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBsZW5kZXJcbiAgICAgICAgKVxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgd2l0aGRyYXdhYmxlRnVuZHNPZihscFRva2VuOiBzdHJpbmcsIGNhbGxlcjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFpbi5jYWxsUmVhZE9ubHlGbihgJHt0aGlzLmRlcGxveWVyLmFkZHJlc3N9LiR7bHBUb2tlbn1gLCBcIndpdGhkcmF3YWJsZS1mdW5kcy1vZlwiLCBbICAgICAgICAgIFxuICAgICAgICAgIHR5cGVzLnByaW5jaXBhbChjYWxsZXIpLFxuICAgICAgXSwgdGhpcy5kZXBsb3llci5hZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZWNvZ25pemFibGVMb3NzZXNPZihscFRva2VuOiBzdHJpbmcsIHRva2VuSWQ6IG51bWJlciwgY2FsbGVyOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYWluLmNhbGxSZWFkT25seUZuKGAke3RoaXMuZGVwbG95ZXIuYWRkcmVzc30uJHtscFRva2VufWAsIFwicmVjb2duaXphYmxlLWxvc3Nlcy1vZi1yZWFkXCIsIFtcbiAgICAgICAgdHlwZXMudWludCh0b2tlbklkKSxcbiAgICAgICAgdHlwZXMucHJpbmNpcGFsKGNhbGxlciksXG4gICAgICBdLCB0aGlzLmRlcGxveWVyLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIGdldEJhbGFuY2UobHBUb2tlbjogc3RyaW5nLCB0b2tlbklkOiBudW1iZXIsIG93bmVyOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYWluLmNhbGxSZWFkT25seUZuKGAke3RoaXMuZGVwbG95ZXIuYWRkcmVzc30uJHtscFRva2VufWAsIFwiZ2V0LWJhbGFuY2VcIiwgW1xuICAgICAgICB0eXBlcy51aW50KHRva2VuSWQpLFxuICAgICAgICB0eXBlcy5wcmluY2lwYWwob3duZXIpLFxuICAgICAgXSwgdGhpcy5kZXBsb3llci5hZGRyZXNzKTtcbiAgICB9XG5cbiAgICBnZXRMb3NzZXNQZXJTaGFyZShscFRva2VuOiBzdHJpbmcsIHRva2VuSWQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhaW4uY2FsbFJlYWRPbmx5Rm4oYCR7dGhpcy5kZXBsb3llci5hZGRyZXNzfS4ke2xwVG9rZW59YCwgXCJnZXQtbG9zc2VzLXBlci1zaGFyZVwiLCBbXG4gICAgICAgIHR5cGVzLnVpbnQodG9rZW5JZCksXG4gICAgICBdLCB0aGlzLmRlcGxveWVyLmFkZHJlc3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTFBUb2tlbiB9OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLEVBQUUsRUFBa0IsS0FBSyxRQUFRLDhDQUE4QyxDQUFDO0FBRXpGLE1BQU0sT0FBTztJQUNULEtBQUssQ0FBUTtJQUNiLFFBQVEsQ0FBVTtJQUVsQixZQUFZLEtBQVksRUFBRSxRQUFpQixDQUFFO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVCO0lBRUQsYUFBYSxDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUU7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUMxQixFQUFFLENBQUMsWUFBWSxDQUNiLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUNaLGtCQUFrQixFQUNsQixFQUFFLEVBQ0YsTUFBTSxDQUNQO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxtQkFBbUIsQ0FBQyxPQUFlLEVBQUUsTUFBYyxFQUFFO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFO1lBQzdGLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQzFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzQjtJQUVELG9CQUFvQixDQUFDLE9BQWUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLDZCQUE2QixFQUFFO1lBQ3JHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3hCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzQjtJQUVELFVBQVUsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLEtBQWEsRUFBRTtRQUMxRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUU7WUFDckYsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDdkIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNCO0lBRUQsaUJBQWlCLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRTtRQUNsRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsRUFBRTtZQUM5RixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0I7Q0FDSjtBQUVELFNBQVMsT0FBTyxHQUFHIn0=