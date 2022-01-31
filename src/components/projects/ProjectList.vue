<template>
  <div class="projectlist-container">
    <div
      v-for="project in propProjectList"
      :key="project.projectId"
      class="projectlist-item"
      :class="{selected: project.projectId === tempProject.projectId}"
      @click="setTempProject(project)"
    >
      <b-row>
        <b-col>
          <b-row>
            <b-col sm="8">
              <div class="smaller-bold">{{ project.projectTitle }}</div>
            </b-col>
            <b-col>
              <div class="smaller-bold hidden-x">{{ project.customerCompany}}</div>
            </b-col>
          </b-row>
          <b-row>
            <div class="smaller-font">{{ project.statusDesc}}</div>
          </b-row>
        </b-col>
        <b-col sm="2" class="col-icon">
          <b-icon variant="danger" icon="bell" class="margin-right" v-if="project.flag"></b-icon>
          <b-icon variant="success" icon="person" v-if="project.meetingType === 'MAYBE_MEETING' "></b-icon>
          <b-icon variant="success" icon="person-fill" v-if="project.meetingType === 'SET_MEETING' "></b-icon>
          <b-icon variant="dark" icon="person-x-fill" v-if="project.meetingType === 'NO_MEETING' "></b-icon>
          <b-icon variant="info" icon="person-check-fill" v-if="project.meetingType === 'DONE_MEETING' "></b-icon>
          <b-icon
            variant="warning"
            icon="hammer"
            class="margin-right"
            v-if="project.sourceType === 'TENDERS' && !project.statusType.includes('KILLED')"
          ></b-icon>
          <!-- <b-icon v-for="icon in icons" :key="icon.id" icon="{{icon.symbol}}" variant="{{icon.variant}}" v-if="project.statusType === '{{icon.status}}'" ></b-icon> -->
          <b-icon
            variant="dark"
            icon="telephone-x-fill"
            v-if="project.statusType === 'INQUIRY_NO_CONTACT' "
          ></b-icon>
          <b-icon
            variant="success"
            icon="box-arrow-right"
            v-if="project.statusType === 'INQUIRY_OFFER_SENT' "
          ></b-icon>
          <b-icon variant="primary" icon="chat" v-if="project.statusType === 'INQUIRY_IN_TALKS' "></b-icon>
          <b-icon
            variant="info"
            icon="funnel-fill"
            v-if="project.statusType === 'INQUIRY_INITIAL' "
          ></b-icon>
          <b-icon
            variant="secondary"
            icon="bookmark-fill"
            v-if="project.statusType === 'LONG_PROSPECT' "
          ></b-icon>
          <b-icon
            variant="secondary"
            icon="bookmark"
            v-if="project.statusType === 'LONG_UNDEFINED' "
          ></b-icon>
          <b-icon variant="success" icon="archive" v-if="project.statusType === 'ORDER_OPEN' "></b-icon>
          <b-icon
            variant="success"
            icon="archive-fill"
            v-if="project.statusType === 'ORDER_CLOSED' "
          ></b-icon>
          <b-icon variant="dark" icon="trash" v-if="project.statusType === 'KILLED_ONLY' "></b-icon>
          <b-icon variant="dark" icon="trash-fill" v-if="project.statusType === 'KILLED_AND_DEAD' "></b-icon>
          
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectList",

  data() {
    return {
      tempProject: {},
      // icons: [
      //   {symbol: 'telephone-x-fill', variant: 'dark', status: 'INQUIRY_NO_CONTACT'}
      //   ]
    };
  },

  props: {
    propProjectList: null,
  },

  methods: {
    setTempProject(item) {
      this.tempProject = item;
      this.$emit("updateTempProject", item);
    },
  },

  created() {},
};
</script>
<style>
.hidden-x {
  overflow: hidden;
}
.projectlist-container {
  margin-top: 10px;
  padding-right: 15px;
  max-height: 90vh;
  /* background-color:#f3f3f3; */
  overflow-y: auto;
  overflow-x: hidden;
  /* border-right: 1px solid gray; */
}
.projectlist-item {
  border: 1px solid lightgray;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 3px;
  padding: 10px 10px;
  cursor: default;
}

div.projectlist-item:hover {
  background-color: #e7e7e7;
}

.selected {
  background-color: #e7e7e7;
}

.col-icon {
  float: right;
  text-align: right;
  width: 40px;
}

.dark-gray {
  color: darkgray;
}

.smaller-font {
  font-size: 80%;
}

.smaller-bold {
  font-size: 90%;
  font-weight: bold;
}

.project-card {
  /* border: 1px solid gray; */
  cursor: default;
}

.status-hot {
  background-color: lightpink;
}

.status-warm {
  background-color: moccasin;
}

.status-cold {
  /* background-color: lightblue; */
}

.status-killed {
  background-color: lightgray;
}

.status-killed-dead {
  background-color: lightslategray;
}

.margin-right {
  margin-right: 5px;
}
</style>
