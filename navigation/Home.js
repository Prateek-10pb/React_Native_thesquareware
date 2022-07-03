import { StyleSheet, Text, View , Image ,Dimensions, ScrollView, TextInput, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
   
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1,
    
    //borderRadius:30,
   // borderWidth:2,
  
  },
  container: {
  //  backgroundColor: '#161616',
    
  }
})

function Home() {
  
    return (
       <ScrollView>
        <View style={{backgroundColor:'black'}}>
          <View>
        <Text style={{fontSize:25,fontWeight:'500',margin:10,color:'white'}}>Hi Bernd 👋</Text> 
        <Image style={{flexDirection:'row', position:'absolute',right:30,top:15  }} source={require('../assets/Message.png' )} /> 
         </View>
      <View style={styles.container}>
      
      <Image style={{flexDirection:'row', position:'absolute', right: 6, top:2 }} source={require('../assets/box.png' )} />
      <Image style={{flexDirection:'row', position:'absolute', right: 32, top:30 }} source={require('../assets/Location.png' )} />
        <Text style={{fontSize:18,fontWeight:'500',color:'white',padding:2}}>  Tuesday , 3 May</Text>
        <Text style={{color:'white'}}>   Cologne , Germany</Text>
        
        
        <View>
        <TextInput style={{borderWidth:1,margin:30,borderRadius:20, backgroundColor:'#323232'}}
        placeholder='                             Search Event...'
        placeholderTextColor='#FFFF'
        />
        </View>
        <Text style={{fontSize:15,fontWeight:'500',color:'white'}}>  Today's event</Text>
        <View  style={{borderWidth:1,margin:23,borderRadius:20}}>
        <Swiper 
        style={styles.wrapper} 
        height={200} 
        horizontal={true} 
        paginationStyle={{
          bottom: -23,}}
          >
          <View style={styles.slide1}>
          <ImageBackground
   style={styles.image}
   source={require('../assets/Events.png')}
 >
  <View >
 <Text style={{fontSize:21,paddingLeft:30,color:'white',fontWeight:'500',left:13,top:10}} >Event name</Text>
 <TouchableOpacity>
 <Text style={{fontSize:15,paddingLeft:220,color:'white',fontWeight:'500',left:13,top:130}} >Go to ticket → </Text>
 </TouchableOpacity>
    <View style={{paddingLeft:300,bottom:35}}>
    <Image source={require('../assets/date8.png')} />
    </View>
        </View>  
 </ImageBackground>
          </View>
          <View style={styles.slide2}>
          <ImageBackground
   style={styles.image}
   source={require('../assets/Events.png')}
 >
  <View>
  <Text style={{fontSize:21,paddingLeft:30,color:'white',fontWeight:'500',left:13,top:10}} >Event name</Text>
 <TouchableOpacity>
 <Text style={{fontSize:15,paddingLeft:220,color:'white',fontWeight:'500',left:13,top:130}} >Go to ticket → </Text>
 </TouchableOpacity>
 <View style={{paddingLeft:300,bottom:35}}>
    <Image source={require('../assets/date8.png')} />
    </View>
  </View>
  </ImageBackground>
          </View>
          <View style={styles.slide3}>
          <ImageBackground
         style={styles.image}
         source={require('../assets/Events.png')}
         >
            <View>
  <Text style={{fontSize:21,paddingLeft:30,color:'white',fontWeight:'500',left:13,top:10}} >Event name</Text>
 <TouchableOpacity>
 <Text style={{fontSize:15,paddingLeft:220,color:'white',fontWeight:'500',left:13,top:130}} >Go to ticket → </Text>
 </TouchableOpacity>
 <View style={{paddingLeft:300,bottom:35}}>
    <Image source={require('../assets/date8.png')} />
    </View>
  </View>
         </ImageBackground>
          </View>
        </Swiper>
</View>
<View  style={{borderWidth:1,margin:23,borderRadius:20}}>
  <Text style={{color:'white',fontSize:15,fontWeight:'500',right:10}}>Events for you</Text>
  <Text style={{color:'white',fontSize:15,fontWeight:'500',left:280,bottom:17}}>See all</Text>
       

        <View>
   <ScrollView horizontal={true}>
  <ImageBackground style={{margin:1}} source={require('../assets/newimage.png')} >
    
    <Text style={{fontSize:18,margin:4,color:'white',fontWeight:'500',height:80,width:250}}> </Text>
    <Text style={{fontSize:15,paddingLeft:30,color:'white',top:15,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:10,paddingLeft:30,color:'white',top:20,right:20,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:10,paddingLeft:25,color:'white',bottom:1,left:160,fontWeight:'700'}}> 🕒  7:00 PM</Text>
    <View style={{paddingLeft:215,bottom:125}}>
    <Image source={require('../assets/date10.png')} />
    </View>
  </ImageBackground>



  <ImageBackground style={{margin:5}} source={require('../assets/newimage2.png')} >
    <View>
      <Text style={{fontSize:15,margin:4,color:'white',fontWeight:'500',height:80,width:250}} > </Text>
      <Text style={{fontSize:15,paddingLeft:30,color:'white',top:15,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:10,paddingLeft:30,color:'white',top:20,right:20,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:10,paddingLeft:25,color:'white',bottom:1,left:160,fontWeight:'700'}}> 🕒  7:00 PM</Text>
    <View style={{paddingLeft:215,bottom:125}}>
    <Image source={require('../assets/date10.png')} />
    </View>
    </View>
    </ImageBackground>


  <ImageBackground style={{margin:5}} source={require('../assets/newimage.png')} >
  <View>
     <Text style={{fontSize:15,margin:4,color:'white',fontWeight:'500',height:80,width:250}} > </Text>
     <Text style={{fontSize:15,paddingLeft:30,color:'white',top:15,right:20,fontWeight:'500'}}> Event name</Text>
   <Text style={{fontSize:10,paddingLeft:30,color:'white',top:20,right:20,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
   <Text style={{fontSize:10,paddingLeft:25,color:'white',bottom:1,left:160,fontWeight:'700'}}> 🕒  7:00 PM</Text>
   <View style={{paddingLeft:215,bottom:125}}>
   <Image source={require('../assets/date10.png')} />
   </View>
   </View>
    </ImageBackground>
</ScrollView>
        </View>
</View>

<View  style={{borderWidth:1,margin:23,borderRadius:20}}>
<Text style={{color:'white',fontSize:15,fontWeight:'500'}}>Popular Events</Text>
<Text style={{color:'white',fontSize:15,fontWeight:'500',left:280,bottom:17}}>See all</Text>
        <Swiper
          style={styles.wrapper}
          height={240}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
          >
            <ImageBackground
              
              style={styles.image}
              source={require('../assets/Events.png')}
            >
              <View>
    
    <Text style={{fontSize:20,paddingLeft:30,color:'white',top:165,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:15,paddingLeft:30,color:'white',top:180,right:22,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:13,paddingLeft:8,color:'white',top:150,left:230,fontWeight:'700'}}> 🕒  7:00 PM</Text>
              </View>
              <View style={{paddingLeft:265,bottom:50}}>
    <Image source={require('../assets/date10b.png')} />
    </View>
            </ImageBackground>
            
          </View>
          <View
            style={styles.slide}
          >
            <ImageBackground
         
              style={styles.image}
              source={require('../assets/Events.png')}
            >
                            <View>
    
    <Text style={{fontSize:20,paddingLeft:30,color:'white',top:165,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:15,paddingLeft:30,color:'white',top:180,right:22,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:13,paddingLeft:8,color:'white',top:150,left:230,fontWeight:'700'}}> 🕒  7:00 PM</Text>
              </View>
              <View style={{paddingLeft:265,bottom:50}}>
    <Image source={require('../assets/date10b.png')} />
    </View>

            </ImageBackground>
          </View>
          <View
            style={styles.slide}
           
          >
            <ImageBackground
           
              style={styles.image}
              source={require('../assets/Events.png')}
            >
                            <View>
    
    <Text style={{fontSize:20,paddingLeft:30,color:'white',top:165,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:15,paddingLeft:30,color:'white',top:180,right:22,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:13,paddingLeft:8,color:'white',top:150,left:230,fontWeight:'700'}}> 🕒  7:00 PM</Text>
              </View>
              <View style={{paddingLeft:265,bottom:50}}>
    <Image source={require('../assets/date10b.png')} />
    </View>
            </ImageBackground>
          </View>
          <View
            style={styles.slide}
          >
            <ImageBackground
          
              style={styles.image}
              source={require('../assets/Events.png')}
            >
                            <View>
    
    <Text style={{fontSize:20,paddingLeft:30,color:'white',top:165,right:20,fontWeight:'500'}}> Event name</Text>
    <Text style={{fontSize:15,paddingLeft:30,color:'white',top:180,right:22,fontWeight:'500'}}> 🎙 Dance & Arts</Text>
    <Text style={{fontSize:13,paddingLeft:8,color:'white',top:150,left:230,fontWeight:'700'}}> 🕒  7:00 PM</Text>
              </View>
              <View style={{paddingLeft:265,bottom:50}}>
    <Image source={require('../assets/date10b.png')} />
    </View>
            </ImageBackground>
          </View>
        </Swiper>
       </View> 
      </View>
      </View>
      </ScrollView> 
    )
  
}


export default Home