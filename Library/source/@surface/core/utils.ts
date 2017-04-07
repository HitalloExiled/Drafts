export function dashedToCamel(value: string): string
{
    let parts = value.split("-");

    return parts.map
    (
        (item, index) =>
        {
            if (index == 0)
            {
                item = item.toLowerCase();
            }
            else
            {
                let [firstLetter, ...rest] = item.split("");
                item = firstLetter.toUpperCase() + rest.join("").toLowerCase();
            }
            
            return item;
        }
    )
    .join("");
}