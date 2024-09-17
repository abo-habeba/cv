<template>
  <div v-if="userStore.user.theme">
    <v-btn class="ma-2"> تخصيص قسم {{ newTheme.nameAr }}<v-icon color="#00c853" size="35" icon="mdi-palette-outline" end></v-icon> </v-btn>
    <v-dialog class="text-center" v-model="dialogresetAll" max-width="900">
      <v-card>
        <p style="color: red" class="ma-1 pa-10">هل تريد حقا ارجاع كل التنسيقات الخاصه بالقسم الي الاصل</p>
        <v-btn class="ma-1 pa-2" @click="resetAll">موافق</v-btn>
        <v-btn class="ma-1 pa-2" @click="dialogresetAll = false">اغلاق</v-btn>
      </v-card>
    </v-dialog>
    <v-dialog class="text-center" v-model="dialogColor" max-width="900">
      <v-card>
        <p class="ma-1 pt-5">اختر لون</p>
        <div style="display: flex; flex-direction: column; justify-content: center; justify-items: center; align-items: center" class="mx-auto my-5">
          <div style="display: flex; flex-direction: row" class="mx-auto">
            <h4 style="width: 130px; height: 20px">قديم</h4>
            <h4 style="width: 130px; height: 20px">جديد</h4>
          </div>
          F
          <div style="display: flex; flex-direction: row" class="mx-auto">
            <div :style="{ backgroundColor: oldDialogColorValue, width: '150px', height: '30px' }"></div>
            <div :style="{ backgroundColor: dialogColorValue, width: '150px', height: '30px' }"></div>
          </div>
        </div>
        <v-color-picker class="ma-auto" v-model="dialogColorValue" show-swatches></v-color-picker>
        <v-btn class="ma-1 pa-2" @click="selectColorValue">موافق</v-btn>
        <v-btn class="ma-1 pa-2" @click="closeDialogColor">اغلاق</v-btn>
      </v-card>
    </v-dialog>
    <v-dialog class="text-center" v-model="dialogItemForm" max-width="1200">
      <v-card class="pa-5">
        <h2 class="ma-5">تنسيق قسم {{ newTheme.nameAr }}</h2>
        <v-form>
          <v-row>
            <v-col cols="12" class="elevation-10">
              <v-row>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.enabled" label="تفعيل القسم"></v-switch>
                </v-col>
                <v-col cols="6">
                  <v-text-field variant="underlined" v-model="newTheme.order" label="ترتيب القسم" type="number" append-icon="mdi-sort"></v-text-field>
                </v-col>
              </v-row>
              <v-col cols="12">
                <v-btn @click="dialogresetAll = true" color="primary"> ارجاع جميع التنسيقات الي الاصل </v-btn>
              </v-col>
            </v-col>

            <!-- Main Title Group -->
            <v-col cols="12" class="group elevation-10">
              <h2 class="sticky-header" :style="mainTitleStyle">معاينة العنوان الرئيسي</h2>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetMainTitle" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.mainTitle.enabled" label="تفعيل العنوان الرئسي"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.mainTitle.fontSize"
                    label="حجم خط العنوان الرئيسي"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('mainTitle', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص العنوان الرئيسي</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('mainTitle', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية العنوان الرئيسي</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <!-- Sub Title Group -->
            <v-col cols="12" class="group elevation-10">
              <h4 class="sticky-header" :style="subTitleStyle">معاينة العنوان الفرعي</h4>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetSubTitle" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.subTitle.enabled" label="تفعيل العنوان الفرعي"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.subTitle.fontSize"
                    label="حجم خط العنوان الفرعي"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('subTitle', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص العنوان الفرعي</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('subTitle', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية العنوان الفرعي</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <!-- Paragraph Group -->
            <v-col cols="12" class="group elevation-10">
              <p class="sticky-header" :style="paragraphStyle">معاينة الفقرة</p>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetParagraph" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.paragraph.enabled" label="تفعيل الفقرة"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.paragraph.fontSize"
                    label="حجم خط الفقرة"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('paragraph', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص الفقرة</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('paragraph', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية الفقرة</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <!-- Button Group CV -->
            <v-col v-if="detTheme.cv" cols="12" class="group elevation-10">
              <p class="sticky-header" :style="buttonStyleCv">معاينة زرار ال CV</p>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetButtonsCv" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.buttonCv.enabled" label="تفعيل الزر"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.buttonCv.fontSize"
                    label="حجم خط الزر"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص الزر</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية الزر</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <!-- Button Group Work -->
            <v-col v-if="detTheme.work" cols="12" class="group elevation-10">
              <p class="sticky-header" :style="buttonStyleWork">معاينة زر الاعمال</p>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetButtonsWork" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.buttonWork.enabled" label="تفعيل الزر"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.buttonWork.fontSize"
                    label="حجم خط الزر"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص الزر</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية الزر</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <!-- Button Group -->
            <v-col v-if="detTheme.btn" cols="12" class="group elevation-10">
              <p class="sticky-header" :style="buttonStyle">معاينة الأزرار</p>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetButtons" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.button.enabled" label="تفعيل الأزرار"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    variant="underlined"
                    v-model="newTheme.button.fontSize"
                    label="حجم خط الأزرار"
                    type="number"
                    append-icon="mdi-format-size"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'textColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون نص الأزرار</h3>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn @click="opendialogColor('button', 'backgroundColor')" color="#B3E5FC">
                    <v-icon class="ma-1" color="#000" size="35" icon="mdi-format-color-fill" end></v-icon>
                    <h3>اختر لون خلفية الأزرار</h3>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>

        <div
          style="
            position: sticky;
            bottom: 0px;
            z-index: 100;
            background-color: blanchedalmond;
            width: 100%;
            max-width: 600px;
            margin: auto;
            border-radius: 7px;
          "
        >
          <v-btn style="color: white; background-color: red; font-weight: bold" class="ma-4" @click="closeDialog">اغلاق</v-btn>
          <v-btn style="color: white; background-color: blue; font-weight: bold" class="ma-4" @click="save">موافق</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { saveItems } from '@/Service/apiService';
import { ref, defineProps, onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { notifySuccess } from '@/Service/notifyService';

const userStore = useUserStore();
const dialogItemForm = ref(false);
const dialogresetAll = ref(false);
const dialogColor = ref(false);
const dialogColorValue = ref(null);
let oldDialogColorValue = null;
const groupNameValue = ref(null);
const colorValue = ref(null);
const newTheme = ref({
  enabled: false,
  nameEn: '',
  nameAr: '',
  mainTitle: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  subTitle: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  paragraph: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  button: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  buttonCv: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  buttonWork: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
});
function selectColorValue() {
  console.log(groupNameValue.value, colorValue.value, dialogColorValue.value); //mainTitle textColor #5E35B1
  newTheme.value[groupNameValue.value][colorValue.value] = dialogColorValue.value;
  dialogColor.value = false;
}
function opendialogColor(groupName, color) {
  // newTheme[groupName][color] = dialogColorValue.value;
  groupNameValue.value = groupName;
  colorValue.value = color;
  dialogColor.value = true;
  oldDialogColorValue = userStore.user.theme[props.detTheme.nameEn][groupNameValue.value][colorValue.value];
}
function closeDialogColor() {
  dialogColorValue.value = '';
  groupNameValue.value = '';
  colorValue.value = '';
  dialogColor.value = false;
}

const props = defineProps({
  nameSection: { type: String, default: null },
  detTheme: {
    type: Object,
    default: {},
  },
});
function deepMerge(target, source) {
  const output = { ...target };
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        output[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}
// newTheme.value = deepMerge(detailsTheme.value, props.detTheme);
onMounted(() => {
  if (userStore.user.theme) {
    newTheme.value = deepMerge(newTheme.value, userStore.user.theme[props.detTheme.nameEn]);
  }
});

watch(
  () => userStore.user,
  userStorehemeValue => {
    if (userStorehemeValue) {
      newTheme.value = deepMerge(newTheme.value, userStorehemeValue.theme[props.detTheme.nameEn]);
      console.log('watch', newTheme.value);
    }
  },
  { immediate: false, deep: false } // لا يتم التنفيذ مباشرة بعد التركيب فقط على أول تغيير
);

const mainTitleStyle = computed(() => ({
  backgroundColor: newTheme.value.mainTitle?.backgroundColor,
  color: newTheme.value.mainTitle?.textColor,
  fontSize: `${newTheme.value.mainTitle?.fontSize}px`,
}));

const subTitleStyle = computed(() => ({
  backgroundColor: newTheme.value.subTitle.backgroundColor,
  color: newTheme.value.subTitle.textColor,
  fontSize: `${newTheme.value.subTitle.fontSize}px`,
}));

const paragraphStyle = computed(() => ({
  backgroundColor: newTheme.value.paragraph.backgroundColor,
  color: newTheme.value.paragraph.textColor,
  fontSize: `${newTheme.value.paragraph.fontSize}px`,
}));

const buttonStyle = computed(() => ({
  backgroundColor: newTheme.value.button.backgroundColor,
  color: newTheme.value.button.textColor,
  fontSize: `${newTheme.value.button.fontSize}px`,
}));
const buttonStyleCv = computed(() => ({
  backgroundColor: newTheme.value.buttonCv.backgroundColor,
  color: newTheme.value.buttonCv.textColor,
  fontSize: `${newTheme.value.buttonCv.fontSize}px`,
}));
const buttonStyleWork = computed(() => ({
  backgroundColor: newTheme.value.buttonWork.backgroundColor,
  color: newTheme.value.buttonWork.textColor,
  fontSize: `${newTheme.value.buttonWork.fontSize}px`,
}));

const allStyle = computed(() => ({
  mainTitle: {
    style: mainTitleStyle.value,
  },
  subTitle: {
    style: subTitleStyle.value,
  },
  paragraph: {
    style: paragraphStyle.value,
  },
  button: {
    style: buttonStyle.value,
  },
  buttonCv: {
    style: buttonStyleCv.value,
  },
  buttonWork: {
    style: buttonStyleWork.value,
  },
}));

function save() {
  console.log('allStyle', allStyle.value);

  const addStyleNewTheme = deepMerge(newTheme.value, allStyle.value);
  console.log('addStyleNewTheme', addStyleNewTheme);
  userStore.user.theme[newTheme.value.nameEn] = { ...addStyleNewTheme };

  // userStore.user.theme._method = 'put';
  console.log('userStore.user.theme', userStore.user.theme);
  saveItems('users-theme', { theme: userStore.user.theme, _method: 'put' }, userStore.user.id).then(res => {
    // userStore.user = res.data;
    console.log('res.data', res.data);

    closeDialog();
  });
}

function resetAll() {
  resetMainTitle(false);
  resetSubTitle(false);
  resetParagraph(false);
  resetButtons(false);
  resetButtonsCv(false);
  resetButtonsWork(false);
  dialogresetAll.value = false;
  save();
  notifySuccess('تم ارجاع التنسيقات بنجاح');
}

function resetMainTitle(notifySucces = true) {
  newTheme.value.mainTitle = deepMerge({}, newTheme.value.MainTitle);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetSubTitle(notifySucces = true) {
  newTheme.value.subTitle = deepMerge({}, newTheme.value.SubTitle);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetParagraph(notifySucces = true) {
  newTheme.value.paragraph = deepMerge({}, newTheme.value.paragraph);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetButtons(notifySucces = true) {
  newTheme.value.button = deepMerge({}, newTheme.value.button);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}
function resetButtonsCv(notifySucces = true) {
  newTheme.value.buttonCv = deepMerge({}, newTheme.value.button);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}
function resetButtonsWork(notifySucces = true) {
  newTheme.value.buttonWork = deepMerge({}, newTheme.value.button);
  save();
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function closeDialog() {
  dialogItemForm.value = false;
}
function opendialogThemeForm() {
  dialogItemForm.value = true;
}

defineExpose({
  opendialogThemeForm,
});
</script>

<style scoped>
.sticky-header {
  max-width: 600px;
  position: -webkit-sticky;
  margin: 5px auto !important;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 10px;
  background-color: #ffffff;
  border: 2px solid blue;
  border-radius: 7px;
}
.group {
  margin-top: 20px;
  padding: 20px;
  border-bottom: 2px solid black;
}
</style>
