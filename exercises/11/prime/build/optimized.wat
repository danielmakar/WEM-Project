(module
 (type $none_=>_i32 (func (result i32)))
 (memory $0 0)
 (export "getPrimes" (func $assembly/index/getPrimes))
 (export "memory" (memory $0))
 (func $assembly/index/getPrimes (result i32)
  (local $0 i32)
  (local $1 i32)
  i32.const 1
  local.set $0
  loop $for-loop|0
   local.get $0
   i32.const 100000
   i32.le_s
   if
    local.get $1
    i32.const 1
    i32.add
    local.get $1
    block $__inlined_func$assembly/index/isPrime (result i32)
     i32.const 2
     local.set $1
     loop $for-loop|01
      local.get $0
      local.get $1
      i32.gt_s
      if
       i32.const 0
       local.get $0
       local.get $1
       i32.rem_s
       i32.eqz
       br_if $__inlined_func$assembly/index/isPrime
       drop
       local.get $1
       i32.const 1
       i32.add
       local.set $1
       br $for-loop|01
      end
     end
     local.get $0
     i32.const 2
     i32.ge_s
    end
    select
    local.set $1
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $1
 )
)
