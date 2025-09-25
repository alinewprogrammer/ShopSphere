import React, { useEffect } from 'react'
import useSettingStore from '@/hooks/use-setting-store'
import { ClientSetting } from '@/types'

export default function AppInitializer({
  setting,
  children,
}: {
  setting: ClientSetting
  children: React.ReactNode
}) {
  // This effect synchronizes the `setting` prop with the global store.
  // It runs after the initial render and any time the `setting` prop changes.
  useEffect(() => {
    useSettingStore.setState({
      setting,
    })
  }, [setting])

  // The component's only job is to run the effect and render its children.
  return children
 
}