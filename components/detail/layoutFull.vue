<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <!-- TABLE USER REGISTRATION -->
      <v-window-item :value="1">
        <v-card class="px-10 py-5">
          <table style="border-collapse:collapse;border:none; margin: auto;">
            <tbody>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Full name
                      </span></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border:solid windowtext 1.0pt;border-left:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'
                      >{{ detail.fullName }}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Width area</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.widthArea
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of plant</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfPlant
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Location</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.location
                    }}</span>
                  </p>
                </td>
              </tr>
              <!-- <tr>
            <td style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Century Gothic",sans-serif;'>Client Contact Number</span></strong></p>
            </td>
            <td style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Century Gothic",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr> -->
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of plant system</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfPlantSystem
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of irrigation system</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfIrrigationSystem
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of water source</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfWaterSource
                    }}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-window-item>

      <!-- TABLE OPERATION INFORMATION -->
      <v-window-item :value="2">
        <v-card class="px-10 py-5">
          <table style="border-collapse:collapse;border:none; margin: auto;">
            <tbody>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of water pump
                      </span></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border:solid windowtext 1.0pt;border-left:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'
                      >{{ detail.typeOfWaterPump }}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Water pump output</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.waterPumpOutput
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of fertilizer</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfFertilizer
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of insecticide</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfInsecticide
                    }}</span>
                  </p>
                </td>
              </tr>
              <!-- <tr>
            <td style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Century Gothic",sans-serif;'>Client Contact Number</span></strong></p>
            </td>
            <td style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Century Gothic",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr> -->
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Type of nozzle</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.typeOfNozzle
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Duration of flush</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.durationOfFlush
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Date of planting</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.dateOfPlanting
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Date of crop yield</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.dateOfCropYield
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Fertilizing date</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.fertilizingDate
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Insecticide process date</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.insecticideProcessDate
                    }}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-window-item>

      <!-- TABLE YIELD CROP INFORMATION -->
      <v-window-item :value="3">
        <v-card class="px-10 py-5">
          <table style="border-collapse:collapse;border:none; margin: auto;">
            <tbody>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Date of planting
                      </span></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border:solid windowtext 1.0pt;border-left:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'
                      >{{ detail.dateOfPlantingYieldCropInformation }}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Date of crop yield</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.dateOfCropYieldYieldCropInformation
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Yield quantity</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.yieldQuantity
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Damage yield quantity</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.damageYieldQuantity
                    }}</span>
                  </p>
                </td>
              </tr>
              <!-- <tr>
            <td style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Century Gothic",sans-serif;'>Client Contact Number</span></strong></p>
            </td>
            <td style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Century Gothic",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr> -->
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Selling price</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.sellingPrice
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Sales revenue</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.salesRevenue
                    }}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-window-item>

      <!-- TABLE REPORT -->
      <v-window-item :value="4">
        <v-card class="px-10 py-5">
          <table style="border-collapse:collapse;border:none; margin: auto;">
            <tbody>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Seasonal result
                      </span></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border:solid windowtext 1.0pt;border-left:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'
                      >{{ detail.seasonalResult }}
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Annual result</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.annualResult
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Sales revenue</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.salesRevenueReport
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Yield improvement</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.yieldImprovement
                    }}</span>
                  </p>
                </td>
              </tr>
              <!-- <tr>
            <td style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Century Gothic",sans-serif;'>Client Contact Number</span></strong></p>
            </td>
            <td style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Century Gothic",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr> -->
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Irrigation period</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.irrigationPeriod
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Rain intensity</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.rainIntensity
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >Days of raining</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.daysOfRaining
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <strong
                      ><span style='font-family:"Century Gothic",sans-serif;'
                        >System breakdown</span
                      ></strong
                    >
                  </p>
                </td>
                <td
                  style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
                >
                  <p
                    style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
                  >
                    <span style='font-family:"Century Gothic",sans-serif;'>{{
                      detail.systemBreakdown
                    }}</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--">
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 4" color="primary" depressed @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    step: 1,

    fullName: "fullName",
    widthArea: "widthArea",
    typeOfPlant: "typeOfPlant",
    location: "location",
    typeOfPlantSystem: "typeOfPlantSystem",
    typeOfIrrigationSystem: "typeOfIrrigationSystem",
    typeOfWaterSource: "typeOfWaterSource",

    typeOfWaterPump: "typeOfWaterPump",
    waterPumpOutput: "waterPumpOutput",
    typeOfFertilizer: "typeOfFertilizer",
    typeOfInsecticide: "typeOfInsecticide",
    typeOfNozzle: "typeOfNozzle",
    durationOfFlush: "durationOfFlush",
    dateOfPlanting: "dateOfPlanting",
    dateOfCropYield: "dateOfCropYield",
    fertilizingDate: "fertilizingDate",
    insecticideProcessDate: "insecticideProcessDate",

    dateOfPlantingYieldCropInformation: "dateOfPlantingYieldCropInformation",
    dateOfCropYieldYieldCropInformation: "dateOfCropYieldYieldCropInformation",
    yieldQuantity: "yieldQuantity",
    damageYieldQuantity: "damageYieldQuantity",
    sellingPrice: "sellingPrice",
    salesRevenue: "salesRevenue",

    seasonalResult: "seasonalResult",
    annualResult: "annualResult",
    salesRevenueReport: "salesRevenueReport",
    yieldImprovement: "yieldImprovement",
    irrigationPeriod: "irrigationPeriod",
    rainIntensity: "rainIntensity",
    daysOfRaining: "daysOfRaining",
    systemBreakdown: "systemBreakdown"
  }),

  computed: {
    // ...mapState({
    //   user: state => state.activeUser
    // }),
    currentTitle() {
      switch (this.step) {
        case 1:
          return "User registration";
        case 2:
          return "Operation information";
        case 3:
          return "Yield crop information";
        default:
          return "Report";
      }
    }
  },
  methods: {
    // getDetails: function() {
    //   let api;
    //   if (this.user == 0) {
    //     api = "http://127.0.0.1:5000/api/report/ipah1";
    //   } else if (this.user == 1) {
    //     api = "http://127.0.0.1:5000/api/report/ipah2";
    //   } else if (this.user == 2) {
    //     api = "http://127.0.0.1:5000/api/report/tkpmPagoh";
    //   }
    //   this.$axios
    //     .$get(api)
    //     // .$get("http://139.59.109.48/api/schedule/nutrient/ipah1")
    //     .then(response => {
    //       // response.forEach(i => {
    //       //   this.isDateBeforeTodayNutrient(i);
    //       // });
    //       // this.getScheduleIpah1();
    //       console.log(response);
    //       if (this.user == 0) {
    //         this.setDetailIpah1(response);
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  },
  props: ["detail"],
  async mounted() {
    console.log(this.detail);
  }
};
</script>
