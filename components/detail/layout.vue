<template>
  <section>
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
                >{{ fullName }}
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
                widthArea
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
                typeOfPlant
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
                location
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
                typeOfPlantSystem
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
                typeOfIrrigationSystem
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
                typeOfWaterSource
              }}</span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullName: "fullName",
      widthArea: "widthArea",
      typeOfPlant: "typeOfPlant",
      location: "location",
      typeOfPlantSystem: "typeOfPlantSystem",
      typeOfIrrigationSystem: "typeOfIrrigationSystem",
      typeOfWaterSource: "typeOfWaterSource"
    };
  }
};
</script>

<style></style>
