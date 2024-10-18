**KRS TEXTUI**



```lua
* Open
exports.krsTextUi:Open('[E] - Interact')

* Close
exports.krsTextUi:Close()


* es_extended/client/function
function ESX.TextUI(message)
    exports.krsTextUi:Open(message)
end

function ESX.HideUI()
    exports.krsTextUi:Close()
end

* Test 

lib.zones.sphere({
    coords = GetEntityCoords(cache.ped),
    size = vec3(1.6, 1.4, 3.2),
    rotation = 346.25,
    debug = false,
    onExit = function()
        exports.krsTextUi:Close() 
    end,
    onEnter = function()
        exports.krsTextUi:Open('Interact')
    end,
    inside = function()
        if IsControlJustReleased(0, 38) then  
            print('Test Marker')
        end
    end,
})
```


![Screenshot 2024-10-18 202121](https://github.com/user-attachments/assets/aefe90f3-a566-40e2-96c6-6346ae759cf3)


