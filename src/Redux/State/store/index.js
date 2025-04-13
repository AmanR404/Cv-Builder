import { chooseTemplate, personalInfo, workExperience, myEducation, mySkills} from "../reducer";
import { createStore, combineReducers } from "redux";

export const store = createStore(combineReducers({
    chooseTemplate,
    personalInfo,
    workExperience,
    myEducation,
    mySkills
}))