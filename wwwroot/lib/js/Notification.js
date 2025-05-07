window.ShowToastr = function (type, message) {
    if (type == "success")
        toastr.success(message);
    else if (type == "info")
        toastr.info(message);
    else if (type == "warning")
        toastr.warning(message);
    else if (type == "error")
        toastr.error(message);
    else
        toastr.info("Unknown message type: " + type);
}