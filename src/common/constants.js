import moment from "moment";

export const weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

export const weekDaysShort = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun'
}

export const newCallBase = [
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 1, turnOff: false},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 2, turnOff: false},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 3, turnOff: false},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 4, turnOff: false},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 5, turnOff: false},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 6, turnOff: true},
    {time: '09:00', hour: '09', minute: '00', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, weekDay: 7, turnOff: true}
]

export const activeDaysErrorMess = 'It is only allowed to have 5 active calls(days) per week. Please deselect one first...'