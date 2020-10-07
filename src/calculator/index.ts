
export function calcHouseMaterials(width: number, length: number, name: string, unit: boolean) {

    const housewidth = unit ? (width * 12) : width;
    const houselength = unit ? (length * 12) : length;
    
    return {name, housewidth, houselength}

}

