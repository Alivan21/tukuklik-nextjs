export type User = {
  name: string;
  organization: {
    id: number;
    org_name: string;
    org_type: string;
    parent_org_id: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  lpse: string | null;
  email: string;
  photo: string | null;
  phone_number: string | null;
  date_of_birth: string | null;
  is_active: boolean | null;
  role: [
    {
      id: number;
      name: string;
      guard_name: string;
      created_at: string;
      updated_at: string;
      pivot: {
        user_id: number;
        role_id: number;
      };
    },
  ];
  created_at: string;
  updated_at: string;
};
