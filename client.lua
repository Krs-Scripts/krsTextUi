function Open(message)
	SendNUIMessage({
		action = 'open',
		message = message
	})
end

function Close()
	SendNUIMessage({
		action = 'close'
	})
end