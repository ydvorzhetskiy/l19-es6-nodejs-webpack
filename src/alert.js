
// export const myAlert = () => alert('!!!!');

export const myAlert = () => fetch('/api')
    .then(response => response)
    .then(response => alert(response.body));
