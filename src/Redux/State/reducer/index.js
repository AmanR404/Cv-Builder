
export const chooseTemplate = (state=0,action) => {
    if(action.type == 'Picker'){
        return state+action.payload
    }
    return state;
}

export const personalInfo = (state={},action) => {
    if(action.type == 'PersonalData'){
        return action.payload
    }
    return state
}

export const workExperience = (state={},action) => {
    if(action.type == 'Experience'){
        return action.payload
    }
    return state
}
export const myEducation = (state={},action) => {
    if(action.type == 'Education'){
        return action.payload
    }
    return state
}
export const mySkills = (state={},action) => {
    if(action.type == 'Skills'){
        return action.payload
    }
    return state
}