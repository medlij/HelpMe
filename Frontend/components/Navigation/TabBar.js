// import React , {useState} from 'react';
// import { View, StyleSheet ,Dimensions } from 'react-native'
// import Tab from './Tab';

// const {width} = Dimensions.get('screen')

// const TabBar= ({state,navigation}) => {
//     const [selected,setSelected] =useState('Home')
//     const {routes} =state;
//     ///- when we press any icon changes color-///
//     const renderColor = (currentTab) => (currentTab===selected ? 'blue' : 'black');//If current === selected color so render this color
//     // --- function for pressing the icons --- ///
//     const handlePress = (activeTab,index) => {
//         //--To navigate to pages so we pass index to iterate pages to press multiple times--//
//         if(state.index !== index){
//             setSelected(activeTab);
//             navigation.navigate(activeTab);
//         }
//     };

//     return (
//         <View style={styles.wrapper}>
//             <View style={styles.container}>
//                 {
//                     routes.map((route,index) => <Tab tab={route}
//                         icon={route.params.icon}
//                         onPress={ () => handlePress(route.name , index)}
//                         color={renderColor(route.name)}
//                         key={route.key} />)
//                 }
//             </View>
//         </View>
//     )
// }
// const styles=StyleSheet.create({
//     wrapper:{
//         // position:'absolute',
//         position:'relative',
//         bottom:1,
//         width,
//         height:50,
//         // backgroundColor:'red',
//         alignItems:'center',
//         justifyContent:'space-around',
//     },
//     container:{
//         flexDirection: 'row',
//         justifyContent:'space-between',
//         backgroundColor:'#fff',
//         // width:250,
//         // borderRadius:100,
//     }
// })
// export default TabBar;
