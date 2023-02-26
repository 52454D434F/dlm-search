var emailRegex = '<link>(\S*)<\/link>';

function isvalidemail(input){
    return emailRegex.test(input)
}