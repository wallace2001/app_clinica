import { FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

export const menu = [
    {
        id: 'adoption',
        name: 'Adoption',
        screen: 'Home',
        icon: <Foundation name="paw" size={27} color="#ffffffb7" />,
    },
    {
        id: 'donation',
        name: 'Donation',
        screen: 'Donation',
        icon: <Ionicons name="ios-bandage" size={27} color="#ffffffb7" />, 
    },
    {
        id: 'add_pet',
        name: 'Add pet',
        screen: 'Add',
        icon: <FontAwesome5 name="plus" size={27} color="#ffffffb7" />,
    },
    {
        id: 'favorites',
        name: 'Favorites',
        screen: 'Favorite',
        icon: <Ionicons name="ios-heart" size={27} color="#ffffffb7" />, 
    },
    {
        id: 'messages',
        name: 'Messages',
        screen: 'Message',
        icon: <MaterialIcons name="email" size={27} color="#ffffffb7" />, 
    },
    {
        id: 'profile',
        name: 'Profile',
        screen: 'Profile',
        icon: <FontAwesome name="user" size={27} color="#ffffffb7" />, 
    },
];

export const footerMenu = [
    {
        id: 'settings',
        name: 'Settings',
        icon: <Ionicons name="settings-sharp" size={22} color="#ffffffb7" />
    },
    {
        id: 'logout',
        name: 'Log out',
        icon: null,
    },
];

export const OPTIONS_BREED = [
    {
        id: 'dog',
        name: 'Cachorro',
        image: <FontAwesome5 name="dog" size={30} color="black" />,
        imageSelected: <FontAwesome5 name="dog" size={30} color="white" />,
    },
    {
        id: 'cat',
        name: 'Gato',
        image: <FontAwesome5 name="cat" size={30} color="black" />,
        imageSelected: <FontAwesome5 name="cat" size={30} color="white" />,
    },
    {
        id: 'rabbit',
        name: 'Coelho',
        image: <MaterialCommunityIcons name="rabbit" size={30} color="black" />,
        imageSelected: <MaterialCommunityIcons name="rabbit" size={30} color="white" />,
    },
    {
        id: 'horse',
        name: 'Cavalos',
        image: <FontAwesome5 name="horse" size={30} color="black" />,
        imageSelected: <FontAwesome5 name="horse" size={30} color="white" />,
    },
    {
        id: 'pig',
        name: 'Porcos',
        image: <MaterialCommunityIcons name="pig-variant" size={30} color="black" />,
        imageSelected: <MaterialCommunityIcons name="pig-variant" size={30} color="white" />,
    },
];

export const ANIMALS = [
    {
        id: 'sorvete',
        name: 'Sorvete',
        breed: 'Vira Lata',
        image: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/cachorro-com-fundo-transparente.png',
        location: 'Módulo 19 CJ A casa 5A, Planaltina',
        sex: <Foundation name="male-symbol" size={26} color="#ccc" />,
        year: 1,
        backgroundColor: '#ff925793',
        distance: '12.6',
    },
    {
        id: 'felicia',
        name: 'Felicia',
        breed: 'Lobo',
        location: 'Módulo 19 CJ A casa 5A, Planaltina',
        image: 'https://amoraospets.com/wp-content/uploads/2018/04/onde-comprar-racoes-baratas.png',
        sex: <Foundation name="female-symbol" size={24} color="#ccc" />,
        year: 4,
        distance: '10.6',
        backgroundColor: '#0dbcde97',
    },
    {
        id: 'rato',
        name: 'Ratinho',
        breed: 'Ratão',
        location: 'Módulo 19 CJ A casa 5A, Planaltina',
        image: 'https://nestorsaudeanimal.com.br/public/site/img/slide/dog-empresa.png',
        sex: <Foundation name="male-symbol" size={24} color="#ccc" />,
        year: 4,
        distance: '10.6',
        backgroundColor: '#e627198b',
    },
];

export const profile = {
    name: 'Wallace Silva',
    country: 'Brazil',
    city: 'Planaltina',
    subTitle: 'Active status',
    icon: 'https://avatars.githubusercontent.com/u/70642744?v=4',
};