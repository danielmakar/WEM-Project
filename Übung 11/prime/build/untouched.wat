(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 16392))
 (global $~lib/memory/__heap_base i32 (i32.const 16392))
 (memory $0 0)
 (table $0 1 funcref)
 (elem $0 (i32.const 1))
 (export "getPrimes" (func $assembly/index/getPrimes))
 (export "memory" (memory $0))
 (func $assembly/index/isPrime (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  i32.const 2
  local.set $1
  loop $for-loop|0
   local.get $1
   local.get $0
   i32.lt_s
   local.set $2
   local.get $2
   if
    local.get $0
    local.get $1
    i32.rem_s
    i32.const 0
    i32.eq
    if
     i32.const 0
     return
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 2
  i32.ge_s
 )
 (func $assembly/index/getPrimes (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  i32.const 0
  local.set $0
  i32.const 1
  local.set $1
  loop $for-loop|0
   local.get $1
   i32.const 100000
   i32.le_s
   local.set $2
   local.get $2
   if
    local.get $1
    call $assembly/index/isPrime
    if
     local.get $0
     i32.const 1
     i32.add
     local.set $0
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $0
 )
)
