export function getName() {
    const {name} = JSON.parse(localStorage.getItem('data'));
    return name;
}