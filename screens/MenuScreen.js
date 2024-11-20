// MenuScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

function MenuScreen() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Melók', value: 'Melók' },
    { label: 'Fizetés ellenőrzése', value: 'Fizetés ellenőrzése' },
    { label: 'Új orvos létrehozása', value: 'Új orvos létrehozása' },
    { label: 'Tagbérek beállítása', value: 'Tagbérek beállítása' },
    { label: 'Statisztika', value: 'Statisztika' }
  ]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> {/* Stílus hozzáadva */}
      {open && (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(itemValue) => {
            setOpen(false);
            if (itemValue) {
              navigation.navigate(itemValue);
            }
          }}
        />
      )}
    </View>
  );
}

export default MenuScreen;