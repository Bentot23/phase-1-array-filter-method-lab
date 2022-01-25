// Code your solution here
// const findMatching = drivers.filter(person => person === "Bobby");
function findMatching(driver, string) {
    return driver.filter(function(driver) { 
        return driver.toLowerCase() === string.toLowerCase()
    })
};
function fuzzyMatch(driver, string) {
    return driver.filter(driver => driver.toLowerCase().substring(0, string.length) === string.toLowerCase());
}
function matchName(driver, string) {
    return driver.filter(driver => driver.name === string)
}