import { Tx, types } from 'https://deno.land/x/clarinet@v1.0.3/index.ts';
class EmergencyExecute {
    static executiveAction(proposal, teamMember) {
        return Tx.contractCall("zge003-emergency-execute", "executive-action", [
            types.principal(proposal), 
        ], teamMember);
    }
}
export { EmergencyExecute };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvZmVybmFuZG9mb3kvRG9jdW1lbnRzL3plc3QtY29udHJhY3RzL29uY2hhaW4vdGVzdHMvaW50ZXJmYWNlcy9lbWVyZ2VuY3ktZXhlY3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeCwgQ2hhaW4sIEFjY291bnQsIHR5cGVzIH0gZnJvbSAnaHR0cHM6Ly9kZW5vLmxhbmQveC9jbGFyaW5ldEB2MS4wLjMvaW5kZXgudHMnO1xuXG5jbGFzcyBFbWVyZ2VuY3lFeGVjdXRlIHtcbiAgc3RhdGljIGV4ZWN1dGl2ZUFjdGlvbihcbiAgICBwcm9wb3NhbDogc3RyaW5nLFxuICAgIHRlYW1NZW1iZXI6IHN0cmluZykge1xuICAgIHJldHVybiBUeC5jb250cmFjdENhbGwoXG4gICAgICBcInpnZTAwMy1lbWVyZ2VuY3ktZXhlY3V0ZVwiLFxuICAgICAgXCJleGVjdXRpdmUtYWN0aW9uXCIsXG4gICAgICBbXG4gICAgICAgIHR5cGVzLnByaW5jaXBhbChwcm9wb3NhbCksXG4gICAgICBdLFxuICAgICAgdGVhbU1lbWJlclxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgeyBFbWVyZ2VuY3lFeGVjdXRlIH07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsRUFBRSxFQUFrQixLQUFLLFFBQVEsOENBQThDLENBQUM7QUFFekYsTUFBTSxnQkFBZ0I7SUFDcEIsT0FBTyxlQUFlLENBQ3BCLFFBQWdCLEVBQ2hCLFVBQWtCLEVBQUU7UUFDcEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUNwQiwwQkFBMEIsRUFDMUIsa0JBQWtCLEVBQ2xCO1lBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDMUIsRUFDRCxVQUFVLENBQ1gsQ0FBQTtLQUNGO0NBQ0Y7QUFFRCxTQUFTLGdCQUFnQixHQUFHIn0=