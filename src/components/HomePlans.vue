<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-xs-center display-1 font-weight-black my-5"
        >Available Meal Plans</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
            <v-container fluid fill-height class="align-content-start">
              <v-row align-content="start">
                <v-col cols="12" align-self="end">
                  <span class="headline white--text">KETO</span>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Keto</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
            <v-container fluid fill-height class="align-content-start">
              <v-row align-content="start">
                <v-col cols="12" align-self="end">
                  <span class="headline white--text">PALEO</span>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Paleo</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
            <v-container fill-height fluid class="align-content-start">
              <v-row>
                <v-col cols="12" align-self="end">
                  <span class="headline white--text">VEGAN</span>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Vegan</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePlans'
};
</script>
