

export default [

  {
    header: "News and General Data",
    i18n: "new_and_data"
  },
  {
    url: "/home",
    name: "News",
    slug: "News",
    icon: "HomeIcon",
    i18n: "news"

  },
  {
    url: "/system_data",
    name: "General System Data",
    slug: "dashboard",
    icon: "InfoIcon",
    i18n: "general_system_data"

  },
  {
    header: "Registration and Operation",
    i18n: "registration_operation_data"
  },
  {
    url: null,
    name: "Registration",
    slug: "Registration",
    icon: "FileTextIcon",

    i18n: "registration",
    submenu: [
      {
        url: '/registration/operator',
        name: "Operator",
        slug: "eCommerceShop",
        i18n: "operator",
      },
      {
          url: '/registration/vehicle',
          name: "Vehicle",
          slug: "Vehicle",
          i18n: "vehicle",
      },
      {
        url: '/registration/operation_unit',
        name: "Operation Unit",
        slug: "Operation Unit",
        i18n: "operation_unit",
      }, {
        url: '/registration/pharmacy',
        name: "Pharmacy",
        slug: "Pharmacy",
        i18n: "pharmacy",
      }, {
        url: '/registration/volunteer',
        name: "Valunteer",
        slug: "Valunteer",
        i18n: "valunteer",
      },{
        url: '/registration/patient_data',
        name: "Patient Data",
        slug: "Patient Data",
        i18n: "patient_data",
      },{
        url: '/registration/hospital_data',
        name: "Hospital Data",
        slug: "Hospital Data",
        i18n: "hospital_data",
      }
    ]
  },

  {
    url: null,
    name: "Operation",
    slug: "Operation",
    icon: "DropletIcon",
    i18n: "operation",
    submenu: [
      {
        url: '/operation/emergency_reported',
        name: "Emergency reported",
        slug: "Emergency reported",
        i18n: "emergency_reported",
      },
      {
        url: '/operation/screening_symptom',
        name: "Screening symptom",
        slug: "Screening symptom",
        i18n: "screening_symptom",
      },
      {
        url: '/operation/getjob',
        name: "getjob",
        slug: "getjob",
        i18n: "getjob",
      }, {
        url: '/operation/command',
        name: "command",
        slug: "command",
        i18n: "command",
      }, {
        url: '/operation/control',
        name: "control",
        slug: "control",
        i18n: "control",
      }, {
        url: '/operation/call',
        name: "Callcenter",
        slug: "callcenter",
        i18n: "callcenter",
      }
    ]
  },
  {
    url: null,
    name: "setting",
    slug: "setting",
    icon: "SettingsIcon",
    i18n: "setting",
    submenu: [
      {
        url: '/setting/screening_setting',
        name: "screening settinging",
        slug: "eCommerceShop",
        i18n: "screening_setting",
      },
      {
          url: '/setting/operation_advice',
          name: "operation advice",
          slug: "Vehicle",
          i18n: "operation_advice",
      },
      {
        url: '/setting/compensate_setting',
        name: "compensate setting",
        slug: "Vehicle",
        i18n: "compensate_setting",
    }
    ]
  },
  {
    url: "/ready_status",
    name: "Ready Status",
    slug: "Ready Status",
    icon: "ArchiveIcon",
    i18n: "not_ready_noti"
  }
]
