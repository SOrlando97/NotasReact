const body = document.getElementsByTagName('body')[0];
export const noscroll = () =>{
    body.classList.add('noscroll');
};
export const scroll = () =>{
    body.classList.remove('noscroll');
};
