interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home1 = "home",
  Office1 = "office",
  Studio1 = "studio",
}

export { Contact, PhoneType };
//이렇게 한꺼번에 익스포트 하는 방식도 있고, 각 인터페이스 앞에다가 해줄수도있다.
//하지만 이렇게 여러개가 있는 경우에는 한번에 익스포트 해주는 것이 좋다.
