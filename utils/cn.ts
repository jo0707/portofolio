import classNames from "classnames"

export function cn(...inputs: (string | undefined | false | null)[]) {
    return classNames(...inputs)
}
