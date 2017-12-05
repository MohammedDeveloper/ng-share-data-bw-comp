# Sharing Data B/W Components

# 1. Input() decorator
- Parent ==> Child
- Declare the variable with decorator in child and pass data from parent

# 2. Output(), EventEmitter() decorator
- Child ==> Parent
- Declare the variable in child and pass data to parent
- Declare the event emitter object
- Create a function which handles event to emit the variable value - Child
- Create a function which handles event to receive the emitted variable value - Parent

# 3. ViewChild() decorator, AfterViewInit interface
- Child ==> Parent
- Injecting child component in parent

# 4. BehaviorSubject - rxjs class
- Any ==> Any
- Injecting service with shared object value across app
- Any change in the value will be broadcasted across app

<img src=""> <img src="">