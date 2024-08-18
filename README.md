**KRS TEXTUI**



```lua
-- Open
exports.krsTextUi:Open('[E] - Interact')

-- Close
exports.krsTextUi:Close()


-- es_extended/client/function
function ESX.TextUI(message)
    exports.krsTextUi:Open(message)
end

function ESX.HideUI()
    exports.krsTextUi:Close()
end

* Test 
```lua
local point = lib.points.new({
    coords = vector3(-46.5240, -1112.0457, 26.4358),
    distance = 3,
})
 
function point:onEnter()
    exports.krsTextUi:Open('Interact')
end
 
function point:onExit()
    exports.krsTextUi:Close()
end
 
function point:nearby()
    DrawMarker(0, self.coords.x, self.coords.y, self.coords.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 255, 255, 255, 255, false, true, 2, false, nil, nil, false)
 
    if self.currentDistance < 1 and IsControlJustReleased(0, 38) then
        print('ciao')
    end
end
```


![krsTextUi](https://github.com/user-attachments/assets/2da0d6e0-18d1-4c65-9f32-4960b80876e5)

