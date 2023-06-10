import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/components/Home'
import MemoHook from './src/hooks/MemoHook'
import CallbackHook from './src/hooks/CallbackHook'
import ContextHook from './src/hooks/ContextHook'
import RefHook from './src/hooks/RefHook'
import ReducerHook from './src/hooks/ReducerHook'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Home/>
      <MemoHook/>
      <CallbackHook/>
      <ContextHook/>
      <RefHook/>
      <ReducerHook/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})