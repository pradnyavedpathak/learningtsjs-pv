export type Transform = (x: string) => string;
export const formatName = function (first: string, last: string, transform?: Transform): string {
    const response = `${last}, ${first}`;
    return transform ? transform(response) : response;
}

export const PI = 3.1415;

