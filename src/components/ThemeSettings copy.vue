<template>
  <div v-if="newTheme.nameAr">
    <v-btn class="ma-2"> تخصيص القسم {{ newTheme.nameAr }}<v-icon color="#00c853" size="35" icon="mdi-palette-outline" end></v-icon> </v-btn>
    <v-dialog class="text-center" v-model="dialogresetAll" max-width="900" persistent>
      <v-card>
        <p class="ma-1 pa-2">هل تريد حقا ارجاع كل التنسيقات الخاصه بالقسم الي الاصل</p>
        <v-btn class="ma-1 pa-2" @click="resetAll">موافق</v-btn>
        <v-btn class="ma-1 pa-2" @click="dialogresetAll = false">اغلاق</v-btn>
      </v-card>
    </v-dialog>
    <v-dialog class="text-center" v-model="dialogItemForm" max-width="1200" persistent>
      <v-card class="pa-5">
        <h2 class="ma-5">تنسيق قسم {{ detailsTheme.nameAr }}</h2>
        <v-form>
          <v-row>
            <!-- سويتش تفعيل وتعطيل القسم وحقل ترتيب القسم -->
            <v-col cols="6">
              <v-switch color="info" v-model="newTheme.enabled" label="تفعيل القسم"></v-switch>
            </v-col>
            <v-col cols="6">
              <v-text-field variant="underlined" v-model="newTheme.order" label="ترتيب القسم" type="number" append-icon="mdi-sort"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn @click="dialogresetAll = true" color="primary"> ارجاع جميع التنسيقات الي الاصل </v-btn>
            </v-col>

            <!-- مجموعة العنوان الرئيسي -->
            <v-col cols="12" class="group">
              <h2
                class="sticky-header"
                :style="{
                  backgroundColor: newTheme?.MainTitle?.color || '#ffffff',
                  color: newTheme?.MainTitle?.textColor || '#000000',
                  fontSize: newTheme?.MainTitle?.fontSize ? newTheme.MainTitle.fontSize + 'px' : 'inherit',
                  zIndex: 1,
                  padding: '10px',
                }"
              >
                معاينة العنوان الرئيسي
              </h2>
              <div style="display: flex">
                <v-col cols="6">
                  <v-btn class="mt-3" @click="resetMainTitle" color="primary">إرجاع إلى الأصل</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-switch color="info" v-model="newTheme.MainTitle.enabled" label="تفعيل العنوان الرئسي"></v-switch>
                </v-col>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-text-field variant="underlined" v-model="newTheme.MainTitle.fontSize" label="حجم خط العنوان الرئيسي" type="number" append-icon="mdi-format-size"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون نص العنوان الرئيسي</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.MainTitle.textColor" show-swatches></v-color-picker>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون خلفية العنوان الرئيسي</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.MainTitle.color" show-swatches></v-color-picker>
                </v-col>
              </v-row>
            </v-col>

            <!-- مجموعة العنوان الفرعي -->
            <v-col cols="12" class="group">
              <h4
                class="sticky-header"
                :style="{
                  backgroundColor: newTheme.SubTitleColor || '#ffffff',
                  color: newTheme.SubTitleTextColor || '#000000',
                  fontSize: newTheme.SubTitleFontSize ? newTheme.SubTitleFontSize + 'px' : 'inherit',
                  zIndex: 1,
                  padding: '10px',
                }"
              >
                معاينة العنوان الفرعي
              </h4>
              <v-btn @click="resetSubTitle" color="primary">إرجاع إلى الأصل</v-btn>
              <v-row>
                <v-col cols="12">
                  <v-text-field variant="underlined" v-model="newTheme.SubTitleFontSize" label="حجم خط العنوان الفرعي" type="number" append-icon="mdi-format-size"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون نص العنوان الفرعي</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.SubTitleTextColor" show-swatches></v-color-picker>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون خلفية العنوان الفرعي</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.SubTitleColor" show-swatches></v-color-picker>
                </v-col>
              </v-row>
            </v-col>
            <!-- مجموعة البرجراف -->
            <v-col cols="12" class="group">
              <p
                class="sticky-header"
                :style="{
                  backgroundColor: newTheme.ParagraphColor || '#ffffff',
                  color: newTheme.ParagraphTextColor || '#000000',
                  fontSize: newTheme.ParagraphFontSize ? newTheme.ParagraphFontSize + 'px' : 'inherit',
                  zIndex: 1,
                  padding: '10px',
                }"
              >
                معاينة القطعة النصية
              </p>
              <v-btn @click="resetParagraph" color="primary">إرجاع إلى الأصل</v-btn>
              <v-row>
                <v-col cols="12">
                  <v-text-field variant="underlined" v-model="newTheme.ParagraphFontSize" label="حجم خط القطعة النصية" type="number" append-icon="mdi-format-size"></v-text-field>
                </v-col>
                <v-col>
                  <label>اختر لون نص القطعة النصية</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.ParagraphTextColor" show-swatches></v-color-picker>
                </v-col>
                <v-col>
                  <label>اختر لون خلفية القطعة النصية</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.ParagraphColor" show-swatches></v-color-picker>
                </v-col>
              </v-row>
            </v-col>

            <!-- مجموعة الأزرار -->
            <v-col cols="12" class="group">
              <h3
                class="sticky-header"
                :style="{
                  backgroundColor: newTheme?.buttonBackgroundColor || '#ffffff',
                  color: newTheme?.ButtonTextColor || '#000000',
                  fontSize: newTheme?.ButtonFontSize ? newTheme.ButtonFontSize + 'px' : 'inherit',
                  zIndex: 1,
                  padding: '10px',
                }"
              >
                معاينة الأزرار
              </h3>
              <v-btn @click="resetButtons" color="primary">إرجاع إلى الأصل</v-btn>
              <v-row>
                <v-col cols="12">
                  <v-text-field variant="underlined" v-model="newTheme.ButtonFontSize" label="حجم نص الأزرار" type="number" append-icon="mdi-format-size"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون نص الأزرار</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.ButtonTextColor" show-swatches></v-color-picker>
                </v-col>
                <v-col cols="12" sm="6">
                  <label>اختر لون خلفية الأزرار</label>
                  <v-color-picker class="ma-auto" v-model="newTheme.ButtonBackgroundColor" show-swatches></v-color-picker>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>

        <div style="position: sticky; bottom: 0px; z-index: 100; background-color: blanchedalmond; width: 100%">
          <v-btn style="color: white; background-color: red; font-weight: bold" class="ma-4" @click="closeDialog">اغلاق</v-btn>
          <v-btn style="color: white; background-color: blue; font-weight: bold" class="ma-4" @click="save">موافق</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { saveItems } from '@/Service/apiService';
import { ref, defineProps, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { notifySuccess } from '@/Service/notifyService';

const userStore = useUserStore();
const dialogItemForm = ref(false);
const dialogresetAll = ref(false);
const newTheme = ref({});
const defaultDetailsTheme = ref(
  {
  enabled: false,
  nameEn: '',
  nameAr: '',
  MainTitle: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  SubTitle: {
    enabled: true,
    backgroundColor: '',
    textColor: '',
    fontSize: '',
  },
  Paragraph: {
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
}
);
const props = defineProps({
  nameSection: { type: String, default: null },
  detTheme: {
    type: Object,
    default: {},
  },
});
const detailsTheme = ref(deepMerge(defaultDetailsTheme.value, props.detTheme));
function deepMerge(target, source) {
  const output = { ...target };
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      output[key] = deepMerge(output[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

onMounted(() => {
  console.log('Theme', userStore.user);
  newTheme.value = deepMerge(detailsTheme.value, userStore.user.theme.skill);
});

function closeDialog() {
  dialogItemForm.value = false;
}

function save() {
  // Update only the modified theme settings
  userStore.user.theme[detailsTheme.nameEN] = { ...newTheme.value };
  userStore.user._method = 'put';
  saveItems('users-theme', userStore.user, userStore.user.id).then(res => {
    userStore.user = res.data;
    closeDialog();
  });
}

function resetAll() {
  resetMainTitle(false);
  resetSubTitle(false);
  resetParagraph(false);
  resetButtons(false);
  dialogresetAll.value = false;
  notifySuccess('تم ارجاع التنسيقات بنجاح');
}

function resetMainTitle(notifySucces = true) {
  // Remove specific keys if needed to reset
  delete newTheme.value.MainTitle.fontSize;
  delete newTheme.value.MainTitle.textColor;
  delete newTheme.value.MainTitle.color;
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetSubTitle(notifySucces = true) {
  delete newTheme.value.SubTitleFontSize;
  delete newTheme.value.SubTitleTextColor;
  delete newTheme.value.SubTitleColor;
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetParagraph(notifySucces = true) {
  delete newTheme.value.ParagraphFontSize;
  delete newTheme.value.ParagraphTextColor;
  delete newTheme.value.ParagraphColor;
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function resetButtons(notifySucces = true) {
  delete newTheme.value.ButtonFontSize;
  delete newTheme.value.ButtonTextColor;
  delete newTheme.value.ButtonBackgroundColor;
  if (notifySucces) {
    notifySuccess('تم ارجاع التنسيقات بنجاح');
  }
}

function opendialogThemeForm() {
  dialogItemForm.value = true;
}

defineExpose({
  opendialogThemeForm,
});
</script>
<style>
.sticky-header {
  position: -webkit-sticky;
  margin: 5px 0 !important;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 10px;
  background-color: #ffffff;
  border: 2px solid blue;
  border-radius: 7px;
}
.group {
  margin-bottom: 20px;
}
.v-color-picker {
  width: 100% !important;
}
</style>
