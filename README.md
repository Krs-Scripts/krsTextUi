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
