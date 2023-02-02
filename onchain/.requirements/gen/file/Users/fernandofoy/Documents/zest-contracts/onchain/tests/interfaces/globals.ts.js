import { Tx, types } from 'https://deno.land/x/clarinet@v1.0.2/index.ts';
import { Buffer } from "https://deno.land/std@0.159.0/node/buffer.ts";
class Globals {
    static getGlobals(chain, caller) {
        return chain.callReadOnlyFn(`globals`, "get-globals", [], caller).result;
    }
    static isOnboarded(chain, user) {
        return chain.callReadOnlyFn(`globals`, "is-onboarded", [
            types.principal(user)
        ], user).result;
    }
    static getCycleLengthDefault(chain, user) {
        return chain.callReadOnlyFn(`globals`, "get-cycle-length-default", [], user).result;
    }
    static getDayLengthDefault(chain, user) {
        return chain.callReadOnlyFn(`globals`, "get-day-length-default", [], user).result;
    }
    static onboardUserAddress(chain, user, btcVersion, btcHash, contractOwner) {
        return chain.mineBlock([
            Tx.contractCall("globals", "onboard-user-address", [
                types.principal(user),
                types.buff(Buffer.from(btcVersion, "hex")),
                types.buff(Buffer.from(btcHash, "hex")), 
            ], contractOwner)
        ]);
    }
    static addGovernor(chain, governor, contractOwner) {
        return chain.mineBlock([
            Tx.contractCall("globals", "add-governor", [
                types.principal(governor), 
            ], contractOwner)
        ]);
    }
    static setContractOwner(chain, newOwner, contractOwner) {
        return chain.mineBlock([
            Tx.contractCall("globals", "set-contract-owner", [
                types.principal(newOwner), 
            ], contractOwner)
        ]);
    }
    static addCollateralContract(chain, collateralContract, contractOwner) {
        return chain.mineBlock([
            Tx.contractCall("globals", "set-coll-contract", [
                types.principal(collateralContract)
            ], contractOwner)
        ]);
    }
    static setcontingencyPlan(chain, enable, contractOwner) {
        return chain.mineBlock([
            Tx.contractCall("globals", "set-contingency-plan", [
                types.bool(enable)
            ], contractOwner)
        ]);
    }
}
export { Globals };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZmVybmFuZG9mb3kvRG9jdW1lbnRzL3plc3QtY29udHJhY3RzL29uY2hhaW4vdGVzdHMvaW50ZXJmYWNlcy9nbG9iYWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR4LCBDaGFpbiwgQWNjb3VudCwgdHlwZXMgfSBmcm9tICdodHRwczovL2Rlbm8ubGFuZC94L2NsYXJpbmV0QHYxLjAuMi9pbmRleC50cyc7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQDAuMTU5LjAvbm9kZS9idWZmZXIudHNcIjtcblxuY2xhc3MgR2xvYmFscyB7XG4gIHN0YXRpYyBnZXRHbG9iYWxzKGNoYWluOiBDaGFpbiwgY2FsbGVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2hhaW4uY2FsbFJlYWRPbmx5Rm4oYGdsb2JhbHNgLCBcImdldC1nbG9iYWxzXCIsIFtdLCBjYWxsZXIpLnJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpc09uYm9hcmRlZChjaGFpbjogQ2hhaW4sIHVzZXI6IHN0cmluZykge1xuICAgIHJldHVybiBjaGFpbi5jYWxsUmVhZE9ubHlGbihgZ2xvYmFsc2AsIFwiaXMtb25ib2FyZGVkXCIsIFsgdHlwZXMucHJpbmNpcGFsKHVzZXIpIF0sIHVzZXIpLnJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDeWNsZUxlbmd0aERlZmF1bHQoY2hhaW46IENoYWluLCB1c2VyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2hhaW4uY2FsbFJlYWRPbmx5Rm4oYGdsb2JhbHNgLCBcImdldC1jeWNsZS1sZW5ndGgtZGVmYXVsdFwiLCBbXSwgdXNlcikucmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldERheUxlbmd0aERlZmF1bHQoY2hhaW46IENoYWluLCB1c2VyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2hhaW4uY2FsbFJlYWRPbmx5Rm4oYGdsb2JhbHNgLCBcImdldC1kYXktbGVuZ3RoLWRlZmF1bHRcIiwgW10sIHVzZXIpLnJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBvbmJvYXJkVXNlckFkZHJlc3MoXG4gICAgY2hhaW46IENoYWluLFxuICAgIHVzZXI6IHN0cmluZyxcbiAgICBidGNWZXJzaW9uOiBzdHJpbmcsXG4gICAgYnRjSGFzaDogc3RyaW5nLFxuICAgIGNvbnRyYWN0T3duZXI6IHN0cmluZykge1xuICAgIHJldHVybiBjaGFpbi5taW5lQmxvY2soW1xuICAgICAgVHguY29udHJhY3RDYWxsKFxuICAgICAgICBcImdsb2JhbHNcIixcbiAgICAgICAgXCJvbmJvYXJkLXVzZXItYWRkcmVzc1wiLFxuICAgICAgICBbXG4gICAgICAgICAgdHlwZXMucHJpbmNpcGFsKHVzZXIpLFxuICAgICAgICAgIHR5cGVzLmJ1ZmYoQnVmZmVyLmZyb20oYnRjVmVyc2lvbiwgXCJoZXhcIikpLFxuICAgICAgICAgIHR5cGVzLmJ1ZmYoQnVmZmVyLmZyb20oYnRjSGFzaCwgXCJoZXhcIikpLFxuICAgICAgICBdLFxuICAgICAgICBjb250cmFjdE93bmVyXG4gICAgICApXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBhZGRHb3Zlcm5vcihcbiAgICBjaGFpbjogQ2hhaW4sXG4gICAgZ292ZXJub3I6IHN0cmluZyxcbiAgICBjb250cmFjdE93bmVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2hhaW4ubWluZUJsb2NrKFtcbiAgICAgIFR4LmNvbnRyYWN0Q2FsbChcbiAgICAgICAgXCJnbG9iYWxzXCIsXG4gICAgICAgIFwiYWRkLWdvdmVybm9yXCIsXG4gICAgICAgIFtcbiAgICAgICAgICB0eXBlcy5wcmluY2lwYWwoZ292ZXJub3IpLFxuICAgICAgICBdLFxuICAgICAgICBjb250cmFjdE93bmVyXG4gICAgICApXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBzZXRDb250cmFjdE93bmVyKFxuICAgIGNoYWluOiBDaGFpbixcbiAgICBuZXdPd25lcjogc3RyaW5nLFxuICAgIGNvbnRyYWN0T3duZXI6IHN0cmluZykge1xuICAgIHJldHVybiBjaGFpbi5taW5lQmxvY2soW1xuICAgICAgVHguY29udHJhY3RDYWxsKFxuICAgICAgICBcImdsb2JhbHNcIixcbiAgICAgICAgXCJzZXQtY29udHJhY3Qtb3duZXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIHR5cGVzLnByaW5jaXBhbChuZXdPd25lciksXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRyYWN0T3duZXJcbiAgICAgIClcbiAgICBdKVxuICB9XG5cbiAgc3RhdGljIGFkZENvbGxhdGVyYWxDb250cmFjdChjaGFpbjogQ2hhaW4sIGNvbGxhdGVyYWxDb250cmFjdDogc3RyaW5nLCBjb250cmFjdE93bmVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY2hhaW4ubWluZUJsb2NrKFtcbiAgICAgIFR4LmNvbnRyYWN0Q2FsbChcbiAgICAgICAgXCJnbG9iYWxzXCIsXG4gICAgICAgIFwic2V0LWNvbGwtY29udHJhY3RcIixcbiAgICAgICAgWyB0eXBlcy5wcmluY2lwYWwoY29sbGF0ZXJhbENvbnRyYWN0KSBdLFxuICAgICAgICBjb250cmFjdE93bmVyXG4gICAgICApXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBzZXRjb250aW5nZW5jeVBsYW4oY2hhaW46IENoYWluLCBlbmFibGU6IGJvb2xlYW4sIGNvbnRyYWN0T3duZXI6IHN0cmluZykge1xuICAgIHJldHVybiBjaGFpbi5taW5lQmxvY2soW1xuICAgICAgVHguY29udHJhY3RDYWxsKFxuICAgICAgICBcImdsb2JhbHNcIixcbiAgICAgICAgXCJzZXQtY29udGluZ2VuY3ktcGxhblwiLFxuICAgICAgICBbIHR5cGVzLmJvb2woZW5hYmxlKSBdLFxuICAgICAgICBjb250cmFjdE93bmVyXG4gICAgICApXG4gICAgXSlcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEdsb2JhbHMgfTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxFQUFFLEVBQWtCLEtBQUssUUFBUSw4Q0FBOEMs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