import {Contact, PhoneType} from './types'

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() : Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts:Contact[] = [ //배열이니 []표시 잊지말기
  //그리고 위에있는 Promise랑 일치하게 해주기
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];

  //2초 뒤에 contacts 함수가 온다.
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  //메서드 호출되고 있다.
  //위에 선언한 fetchContacts 함수를 이용해서 호출하고
  //then에 내용을 넣어주었다.
  fetchData():void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name:string): Contact[] { // 여기서 Contact가 [배열] 인지는 어떻게 알았냐면 filter를 할 때 여러개가 있으니 필터를 해주는거니까 배열로 인식한 것이다.
    // 파라미터는 string 그리고 반환값은 Contact다.
    return this.contacts.filter(contact => contact.name === name);
    // 전달받은 name에 따라 필터링을 해준다.
    /*name이름은 string으로한 이유는 
    interface Contact {
        name: string;
        address: string;
        phones: PhoneNumberDictionary;
      }
    이렇게 위에 인터페이스에 담긴 name이 string으로 되어있기 때문이다.
    */

  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

//💛이넘 이용한 타입 정의
//위에 선언된 Contact에 담긴 Phone에 들어올 수 있는 형태는 총 3가지다. (Home, office, studio)
  findContactByPhone(phoneNumber: number, phoneType: PhoneType):Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  

  //반환값이 없으면 void
  addContact(contact: Contact):void {
    this.contacts.push(contact);
  }

  //기존 배열을 뽑아 새로운 배열로 만들어주는 것을 map이라고 하쥬
  displayListByName():string[] {
    return this.contacts.map(contact => contact.name);
    //name은 string이기 때문에 string으로
  }

  displayListByAddress():string[] {
    return this.contacts.map(contact => contact.address);
  }
}
/* ------------------------------------------------ */

// var div =document.querySelector('div');
// div.innerText;
//단순히 위처럼만 코드를 짜게되면 div가 null인지 html엘리먼트인지 모르니까 if문을 이용해 null값이 아니라는 것을 보장을 해주어야 한다.


var div = document.querySelector('div') as HTMLDivElement;
div.innerText;

/* ------------------------------------------------ */

//heroes에 name과 age객체가 담긴 배열을 생성시켰다.
let heroes = [
  {name: 'Tony', age: 30},
  {name:'Captain', age: 100}
];

heroes.map(function(hero) {
  return hero.name;
  // ['Tony', 'Captain']
})

new AddressBook();
