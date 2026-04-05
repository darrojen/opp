// // join-team.ts — types & API helpers for the Find Your Teammates feature

// export interface TeamRole {
//   id: string;
//   title: string;
//   projectName: string;
//   projectLogo?: string; // URL or imported asset
//   openCount: number;
// }

// export interface JoinTeamProps {
//   /** Roles currently seeking teammates */
//   roles: TeamRole[];
//   /** Called when the user clicks "Join a BUIDL" */
//   onJoinBuidl?: () => void;
//   /** Called when the user clicks the mail icon on a role card */
//   onContactRole?: (role: TeamRole) => void;
// }

// // ---------------------------------------------------------------------------
// // Mock / fetch helpers
// // ---------------------------------------------------------------------------

// /** Returns a mock list of open roles (swap for real API call). */
// export async function fetchOpenRoles(): Promise<TeamRole[]> {
//   // Replace with: const res = await fetch('/api/roles'); return res.json();
//   return [
//     {
//       id: "role-001",
//       title: "Aws Service event lead",
//       projectName: "AI Climate Action Prompt Generator using AWS",
//       projectLogo: "https://placehold.co/48x48/1a1a2e/38bdf8?text=CA",
//       openCount: 1,
//     },
//   ];
// }

// /**
//  * Send a contact request for a specific role.
//  * Returns true on success.
//  */
// export async function contactRole(roleId: string): Promise<boolean> {
//   // Replace with your real endpoint:
//   // const res = await fetch(`/api/roles/${roleId}/contact`, { method: 'POST' });
//   // return res.ok;
//   console.log(`[join-team] contact request sent for role ${roleId}`);
//   return true;
// }


// join-team.ts — types & API helpers for the Find Your Teammates feature

export type RoleStatus = "approved" | "pending" | "rejected";

export interface TeamRole {
  id: string;
  title: string;
  projectName: string;
  projectLogo?: string; // URL or imported asset
  openCount: number;
  status?: RoleStatus; // badge: approved | pending | rejected
  href?: string; // link for the card
}

export interface JoinTeamProps {
  /** Roles currently seeking teammates */
  roles: TeamRole[];
  /** Called when the user clicks "Join a BUIDL" */
  onJoinBuidl?: () => void;
  /** Called when the user clicks the mail icon on a role card */
  onContactRole?: (role: TeamRole) => void;
  /** Called when the user clicks the Request button */
  onRequestRole?: (role: TeamRole) => void;
}

// ---------------------------------------------------------------------------
// Mock / fetch helpers
// ---------------------------------------------------------------------------

/** Returns a mock list of open roles (swap for real API call). */
export async function fetchOpenRoles(): Promise<TeamRole[]> {
  return [
    {
      id: "role-001",
      title: "AWS Service Event Lead",
      projectName: "AI Climate Action Prompt Generator using AWS",
      projectLogo: "https://placehold.co/48x48/1a1a2e/38bdf8?text=CA",
      openCount: 1,
      status: "approved",
      href: "/roles/role-001",
    },
    {
      id: "role-002",
      title: "Frontend Engineer",
      projectName: "DeFi Portfolio Tracker",
      openCount: 2,
      status: "pending",
      href: "/roles/role-002",
    },
    {
      id: "role-003",
      title: "ML Research Lead",
      projectName: "Open Source LLM Benchmarking Suite",
      openCount: 1,
      status: "rejected",
      href: "/roles/role-003",
    },
  ];
}

export async function contactRole(roleId: string): Promise<boolean> {
  console.log(`[join-team] contact request sent for role ${roleId}`);
  return true;
}

export async function requestRole(roleId: string): Promise<boolean> {
  console.log(`[join-team] join request sent for role ${roleId}`);
  return true;
}