export const filteredStr = (str: string): string[] => {
    let clearStr = str.replace(/,/g, "").replace(/;/g,  "");
    return clearStr.split(" ");
}