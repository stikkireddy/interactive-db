export const autoloaderOptionActions = {
    _format: "_format",
    _trigger_once: "_trigger_once",
    // reset processing time to nulls
    _reset_processing_time: "_reset_processing_time",
    _processing_time_qty: "_processing_time_qty",
    _processing_time_units: "_processing_time_units"
}

export const autoloaderInitialState = {format: "csv", trigger_once: true, processing_time: {qty:null, units: null},}