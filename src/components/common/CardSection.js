import React from 'react';
import { View} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyle}>
           {props.children}
        </View>
    );
};

const styles = {
    containerStyle : {
        borderBottomWidth:1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottom: '#ddd',
        position: 'relative',


    }
}

// module.exports = {
//     CardSection:CardSection
// }
 export {CardSection};