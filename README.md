# Sharing Data B/W Components

# 1. Input() decorator
- Parent ==> Child
- Declare the variable with decorator in child and pass data from parent

# 2. Output(), EventEmitter() decorator
- Child ==> Parent
- Declare the variable in child and pass data to parent
- Declare the event emitter object
- Create a function which handles event to emit the variable value

# 2. ViewChild() decorator, AfterViewInit interface
- Child ==> Parent
- Injecting child component in parent

## ----- Inprogress ------