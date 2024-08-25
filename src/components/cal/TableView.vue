<template>
  {{ getDayHeight(6) }}
  <div class="position-relative" style="height: 65px">
    <div class="position-absolute left-0 d-inline-block" style="width: 100px; height: 65px">...</div>
    <div
      v-for="h in 10"
      :key="h"
      class="position-absolute border bg-light-blue-lighten-4 d-flex align-center justify-center d-inline-block"
      :style="`left:${h * 100}px;width:100px;height:65px`"
    >
      {{ getHour(h) }}
    </div>
  </div>

  <div class="position-relative" v-for="day in days" :key="day.id" :style="`height:${getDayHeight(day.id)}px`">
    <div
      class="position-absolute border left-0 d-inline-block d-flex align-center justify-center bg-grey"
      :style="`width:100px;height:${getDayHeight(day.id)}px`"
    >
      {{ day.name }}
    </div>
    <div
      v-for="h in 10"
      :key="h"
      class="position-absolute border d-inline-block"
      :style="`left:${h * 100}px;width:100px;height:${getDayHeight(day.id)}px`"
    ></div>

    <v-card
      variant="outlined"
      color="info"
      v-for="session in getDaySessions(day.id)"
      :key="session.top"
      class="position-absolute d-inline-block bg-yellow"
      :style="`top:${session.top}px;left:${session.start}px;width:${session.width}px;height:30px`"
    >
      session at {{ session.time }}
    </v-card>
  </div>
</template>
<script setup >
const props = defineProps({
  sessions: Array,
});
const days = [
  { id: 6, name: 'السبت', e_name: 'saturday' },
  { id: 0, name: 'الاحد', e_name: 'sunday' },
  { id: 1, name: 'الاثنين', e_name: 'monday' },
  { id: 2, name: 'الثلاثاء', e_name: 'tuseday' },
  { id: 3, name: 'الاربعاء', e_name: 'wednisday' },
  { id: 4, name: 'الخميس', e_name: 'thurthday' },
];

function mapSessions() {
  if (!props.sessions) return [];
  return props.sessions
    .filter(s => s.time && s.day > -1 && s.duration)
    .map((s, index) => {
      return {
        id: index + 1,
        name: s.day + ' ' + s.time,
        day: s.day,
        time: s.time,
        width: s.duration * 100,
        top: 0,
        start: getTimeIndex(s.time) * 100,
        end: getTimeIndex(s.time) * 100 + s.duration * 100,
      };
    });
}

//convert time (hours and minuts) to number
function getTimeIndex(time) {
  const h = parseInt(time.split(':')[0]);
  const m = parseInt(time.split(':')[1]);
  if (h > 7) {
    return h - 7 + m / 60;
  }
  return 0;
}

//convert number to time
function getHour(h) {
  if (h < 6) return '0' + (h + 7) + ':' + '00 AM';
  return '0' + (h - 5) + ':' + '00 BM';
}

//get sessions for day
function getDaySessions(day_id) {
  let sessions = mapSessions().filter(s => s.day == day_id);
  setTop(sessions);
  return sessions;
}

//set sessions top value
//need revision not work properly
function setTop(sessions) {
  sessions.reduce((a, session) => {
    if (a.length == 0) a = [[session]];
    else {
      const row_index = a.findIndex(
        row =>
          row.filter((prev_session) => {
            return (
              (session.start >= prev_session.start && session.start < prev_session.end) ||
              (session.end > prev_session.start && session.end <= prev_session.end)
            );
          }).length == 0
      );
      if (row_index > -1) {
        session.top = 0;
        a[row_index].push(session);
      } else {
        session.top = a.length * 32;
        a.push([session]);
      }
    }
    return a;
  }, []);
}

//set day row height
//default 30 px
//auto graw to accomade all sessions
//need revision not work properly
function getDayHeight(day_id) {
  const d = mapSessions()
    .filter(s => s.day == day_id)
    .reduce((a, session) => {
      if (a.length == 0) a = [[session]];
      else {
        const row_index = a.findIndex(
          row =>
            row.filter((prev_session) => {
              return (
                (session.start >= prev_session.start && session.start < prev_session.end) ||
                (session.end > prev_session.start && session.end <= prev_session.end)
              );
            }).length == 0
        );
        if (row_index > -1) {
          a[row_index].push(session);
        } else {
          a.push([session]);
        }
      }
      return a;
    }, []);
  if (d.length < 2) return 42;
  return 20 + d.length * 32;
}
</script>
