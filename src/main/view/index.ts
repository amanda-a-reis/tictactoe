const buttonTest = document.querySelector('.button-test') as Element

function sayHello (): void {
  alert('Hello, js working!')
}

buttonTest.addEventListener('click', sayHello)
