
import "./OnboardingLayout.css";
import avatarNova from "/branding/avatar-nova-hi.png";

function OnboardingLayout({
  title,
  description,
  children,
}) {
  return (
    <div className="onboarding-container">

      <div className="onboarding-card">

        <img
            src="/branding/Nova avatar1.png" 
            alt="Nova"
            className="dashboard-avatar"
          />

        <h1 className="onboarding-title">
          {title}
        </h1>

        {description && (

          <p className="onboarding-description">
            {description}
          </p>

        )}

        <div className="onboarding-content">

          {children}

        </div>

      </div>

    </div>
  );
}

export default OnboardingLayout;