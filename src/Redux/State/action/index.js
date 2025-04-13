
export const templatePicker = (value) => {
    return{
        type: 'Picker',
        payload: value
    }
}

export const personalData = (data) => {
    return{
        type: 'PersonalData',
        payload : data
    }
}

export const experience = (data) => {
    return{
        type: 'Experience',
        payload : data
    }
}

export const education = (data) => {
    return{
        type: 'Education',
        payload : data
    }
}
export const skills = (data) => {
    return{
        type: 'Skills',
        payload : data
    }
}