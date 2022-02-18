(module
    (export "ggT" (func $ggT ))
    (func $ggT (param $x i32) (param $y i32) (result i32)
        local.get $x
        i32.eqz
        if
            local.get $y
            return
        end
        loop $ggtLoop
            local.get $y
            i32.const 0
            i32.ne
            if
                local.get $x
                local.get $y
                i32.gt_s
                if
                    local.get $x
                    local.get $y
                    i32.sub
                    local.set $x
                else
                    local.get $y
                    local.get $x
                    i32.sub
                    local.set $y
                end
                br $ggtLoop
            end
        end
        local.get $x
        return
    )
)