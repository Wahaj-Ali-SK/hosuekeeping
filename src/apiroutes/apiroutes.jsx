const baseURL = 'https://168kgs.sevenkoncepts.com/api'

export const user_details  = `${baseURL}/users/me?populate[tasks][populate]=*&populate[user_role][populate][screenpermission][populate]=*`;

export const loginAPI = `${baseURL}/auth/local`;

export const getATask = `${baseURL}/tasks`;