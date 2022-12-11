(module
  (import "console" "log" (func $log (param i32)))
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    (local $sum i32)
    local.get $lhs
    local.get $rhs
    i32.add
    local.set $sum
    local.get $sum
    call $log
    local.get $sum)
  (export "add" (func $add))
)